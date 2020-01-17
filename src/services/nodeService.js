// *** Функции для работы с нодами ***

/** 
 * Возвращает контент ноды в виде массива.
*/
export function getContentArrayOf(node) {
  let nodeContent = [];

  if (Array.isArray(node)) {
    nodeContent = node;
  } else {
    nodeContent = node.content ? [].concat(node.content) : [];
  }

  return nodeContent;
} 

/** 
 * Возвращает true, если нода - блок.
*/
export const isBlock = (node) => node.block && !node.elem;

/** 
 * Возвращает функцию-recognizer для нод.
*/
export const nodeRecognizer = (blockName, modName, modValue, ...otherProperties) => {
  if (!arguments.length) {
    return () => true;
  }

  const recognizers = [];

  if (blockName) {
    const blockRecognizer = (node) => node.block === blockName
    recognizers.push(blockRecognizer);
  }

  if (modName) {
    const modRecognizer = modValue ? 
      (node) => node.mods && (node.mods[modName] === modValue) : 
      (node) => (node.mods && node.mods[modName]) ? true : false;
    recognizers.push(modRecognizer);
  }

  if (otherProperties.length) {
    otherProperties.forEach(property => {
      if (typeof property !== 'object' || !property) {
        return;
      }

      const propertyKey = Object.keys(property)[0];
      const propertyValue = property[propertyKey];

      const propertyRecognizer = propertyValue ? 
        (node) => node[propertyKey] === propertyValue : 
        (node) => node[propertyKey] ? true : false;

      recognizers.push(propertyRecognizer);
    })
  }

  // Если какой-то из recognizer'ов не прошел, функция вернет false. В противном случае - true
  return (node) => {
    let isPassedWholeRecognizer = true;

    for (let i = 0; i < recognizers.length; i++) {
      const recognizer = recognizers[i];
      const isPassedRecognizer = recognizer(node);

      if (!isPassedRecognizer) {
        isPassedWholeRecognizer = false;
        break;
      }
    }
    
    return isPassedWholeRecognizer;
  }
}

/** 
 * Возвращает массив объектов объектов, удовлетворяющих nodeRecognizer, найденных в дереве.
 * 
 * @param {recognizerFunction} nodeRecognizer
*/
export function findAllNodesIn(rootNode, nodeRecognizer) {
  if (!nodeRecognizer) {
    return;
  }
  
  const foundNodes = [];

  if (nodeRecognizer(rootNode)) {
    foundNodes.push(rootNode);
  }

  if (rootNode.mix) {
    const foundMixedNodes = Array.isArray(rootNode.mix) ? rootNode.mix.map(mixedNode => findAllNodesIn(mixedNode, nodeRecognizer)) : findAllNodesIn(rootNode.mix, nodeRecognizer);
    foundNodes.push(...foundMixedNodes);
  }

  const nodeContent = getContentArrayOf(rootNode);

  if (nodeContent.length) {
    const foundContentNodes = nodeContent.map(childNode => findAllNodesIn(childNode, nodeRecognizer));
    foundNodes.push(...foundContentNodes);
  }

  return foundNodes.flat(Infinity);
}

/** 
 * Возвращает массив корневых объектов, удовлетворяющих nodeRecognizer, найденных в дереве.
 * 
 * @param {recognizerFunction} nodeRecognizer
*/
export function findAllRootNodesIn(rootNode, nodeRecognizer) {
  if (!nodeRecognizer) {
    return;
  }

  if (nodeRecognizer(rootNode)) {
    return [rootNode];
  }

  let foundMixedNodes = [];
  if (rootNode.mix) {
    foundMixedNodes = Array.isArray(rootNode.mix) ? rootNode.mix.map(mixedNode => findAllRootNodesIn(mixedNode, nodeRecognizer)) : findAllRootNodesIn(rootNode.mix, nodeRecognizer);
  }
  
  const nodeContent = getContentArrayOf(rootNode);
  const foundContentNodes = nodeContent.map(childNode => findAllRootNodesIn(childNode, nodeRecognizer));

  return [...foundContentNodes.flat(Infinity), ...foundMixedNodes.flat(Infinity)];
}

/** 
 * Возвращает объект первой попавшегося в дереве объекта, удовлетворяющего nodeRecognizer.
 * @param {recognizerFunction} nodeRecognizer
*/
export function findNodeIn(rootNode, nodeRecognizer) {
  if (!nodeRecognizer) {
    return;
  }

  if (nodeRecognizer(rootNode)) {
    return rootNode;
  }

  const nodeContent = getContentArrayOf(rootNode);

  if (!nodeContent) {
    return null;
  }

  let foundNode = null;

  // Используем for, т.к. forEach нельзя остановить, когда нашли нужную нам ноду
  for (let i = 0; i < nodeContent.length; i++) {
    const nodeFoundInChildNode = findNodeIn(nodeContent[i], nodeRecognizer);
    
    if (nodeFoundInChildNode) {
      foundNode = nodeFoundInChildNode;
      break;
    }
  }

  return foundNode;
}

/** 
 * Возвращает массив блоков, удовлетворяющих beforeBlockRecognizer и afterBlockRecognizer и стоящих в порядке следования (как в структуре блока)
 * @param {recognizerFunction} beforeBlockRecognizer
 * @param {recognizerFunction} afterBlockRecognizer
*/
export function flatArrayOfBeforeAndAfterBlocks(rootNode, beforeBlockRecognizer, afterBlockRecognizer, matchedBlocks = []) {
  let result = matchedBlocks;

  if (Array.isArray(rootNode)) {
    result = rootNode.map(child => flatArrayOfBeforeAndAfterBlocks(child, beforeBlockRecognizer, afterBlockRecognizer, matchedBlocks));
  } else {
    if (afterBlockRecognizer(rootNode) || beforeBlockRecognizer(rootNode)) {
      return [...result, rootNode];
    }
  
    const nodeContent = rootNode.content ? [].concat(rootNode.content) : [];
  
    if (nodeContent.length === 0) {
      return result;
    }
  
    result = nodeContent.map(child => flatArrayOfBeforeAndAfterBlocks(child, beforeBlockRecognizer, afterBlockRecognizer, result))
  }

  return result.flat(Infinity);
}