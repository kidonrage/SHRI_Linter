/**
 * Функция, принимающая на вход объект и возвращающая true, когда он соответствует требованиям, определенным в теле функции, и false в обратном случае
 *
 * @callback recognizerFunction
 * @param {Object} node
 * @returns {boolean}
 */

import {getASTRoots, getASTContent, parseASTLocation} from './astService';

export function getRoots(json) {
  if (json.length === 0) {
    return [];  
  }

  let roots = [];
  try {
    const parsedJSON = JSON.parse(json);
    roots = Array.isArray(parsedJSON) ? parsedJSON.flat(Infinity) : [parsedJSON];
  } catch(error) {
    console.error('Invalid JSON: ', error);
  }

  return roots;
}

export function getGraphs(json) {
  // Если в входящем json массив, нужно вернуть массив корневых объектов
  const roots = getRoots(json);
  if (roots.length === 0) {
    return [];
  }

  const ASTRoots = getASTRoots(json);

  console.log(roots.length, ASTRoots.length);

  const graphs = roots.map((rootObj, index) => {
    const rootASTObj = ASTRoots[index];

    const rootObjWithLoc = applyServiceData(rootObj, rootASTObj);

    return rootObjWithLoc
  });
  
  return graphs;
}

// Инъекцирует данные о локации и глубине вложенности
function applyServiceData(block, ASTBlock, depth = 0) {
  if (Array.isArray(block) && ASTBlock.type === 'Array') {
    return block.map((childBlock, index) => {
      return applyServiceData(childBlock, ASTBlock.children[index], depth + 1)
    })
  }

  const blockContent = block.content;

  if (!blockContent) {
    return {
      ...block,
      depth,
      location: parseASTLocation(ASTBlock)
    }
  }

  const ASTBlockContent = getASTContent(ASTBlock);

  const contentWithLocation = applyServiceData(blockContent, ASTBlockContent, depth + 1);

  let result = {
    ...block,
    depth,
    content: contentWithLocation,
    location: parseASTLocation(ASTBlock)
  };

  return result;
}

function getContentArrayOf(node) {
  let nodeContent = [];

  if (Array.isArray(node)) {
    nodeContent = node;
  } else {
    nodeContent = node.content ? [].concat(node.content) : [];
  }

  return nodeContent;
} 

/** 
 * Возвращает массив объектов объектов, удовлетворяющих nodeRecognizer, найденных в дереве.
 * 
 * @param {recognizerFunction} nodeRecognizer
*/
function findAllNodesIn(rootNode, nodeRecognizer = (node) => false) {
  const foundNodes = [];

  if (nodeRecognizer(rootNode)) {
    foundNodes.push(rootNode);
  }

  const nodeContent = getContentArrayOf(rootNode);

  if (!nodeContent.length) {
    return foundNodes;
  }

  const elements = nodeContent.map(childNode => findAllNodesIn(childNode, nodeRecognizer));
  foundNodes.push(...elements);

  return foundNodes.flat(Infinity);
}

/** 
 * Возвращает массив корневых объектов, удовлетворяющих nodeRecognizer, найденных в дереве.
 * 
 * @param {recognizerFunction} nodeRecognizer
*/
function findAllRootNodesIn(rootNode, nodeRecognizer = (node) => false) {
  if (nodeRecognizer(rootNode)) {
    return [rootNode];
  }

  const nodeContent = getContentArrayOf(rootNode);

  if (!nodeContent.length) {
    return [];
  }

  const elements = nodeContent.map(childNode => findAllRootNodesIn(childNode, nodeRecognizer));

  return elements.flat(Infinity);
}

/** 
 * Возвращает объект первой попавшегося в дереве объекта, удовлетворяющего nodeRecognizer.
 * @param {recognizerFunction} nodeRecognizer
*/
export function findNodeIn(rootNode, nodeRecognizer = (node) => false) {
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
 * Возвращает все блоки с именем blockName
*/
export function findRootBlocksWithName(rootNode, blockName) {
  const blockRecognizer = (node) => node.block === blockName;

  return findAllRootNodesIn(rootNode, blockRecognizer);
}

/** 
 * Возвращает все блоки с модификатором modName, имеющим значение modValue
*/
export function findRootBlocksWithModValue(rootNode, blockName, modName, modValue) {
  const blockRecognizer = (node) => node.block === blockName && node.mods && node.mods[modName] === modValue;

  return findAllNodesIn(rootNode, blockRecognizer);
}

/** 
 * Возвращает все блоки, у которых определен модификатор modName
*/
export function findRootBlocksWithMod(rootNode, blockName, modName) {
  const blockRecognizer = (node) => node.block === blockName && node.mods && node.mods[modName];

  return findAllNodesIn(rootNode, blockRecognizer)
}

/** 
 * Возвращает все элементы elemName в блоке
*/
export function findAllElementsInBlock(block, elemName) {
  return findAllNodesIn(block, (node) => {
    return node.elem === elemName
  })
}

/** 
 * Возвращает массив дочерних для rootNode блоков, удовлетворяющих beforeBlockRecognizer и находящихся перед блоками, удовлетворяющими afterBlockRecognizer, на том же или более глубоком уровне вложенности.
 * @param {recognizerFunction} beforeBlockRecognizer
 * @param {recognizerFunction} afterBlockRecognizer
*/
export function findChildBlocksPlacedBeforeOtherBlocks(rootNode, beforeBlockRecognizer, afterBlockRecognizer) {
  if (afterBlockRecognizer(rootNode) || beforeBlockRecognizer(rootNode)) {
    return [];
  };

  const recognizedBlocks = flatArrayOfBeforeAndAfterBlocks(rootNode, beforeBlockRecognizer, afterBlockRecognizer);

  const beforeBlocks = recognizedBlocks.filter(block => beforeBlockRecognizer(block));
  const afterBlocks = recognizedBlocks.filter(block => afterBlockRecognizer(block));

  let result = [];

  afterBlocks.forEach(referenceBlock => {
    const blocksBeforeReferenceBlock = beforeBlocks.filter(beforeBlock => {
      return recognizedBlocks.indexOf(beforeBlock) < recognizedBlocks.indexOf(referenceBlock) && beforeBlock.depth <= referenceBlock.depth
    })

    result = [...result, ...blocksBeforeReferenceBlock];

  })

  return result
}

/** 
 * Возвращает массив блоков, удовлетворяющих beforeBlockRecognizer и afterBlockRecognizer и стоящих в порядке следования (как в структуре блока)
 * @param {recognizerFunction} beforeBlockRecognizer
 * @param {recognizerFunction} afterBlockRecognizer
*/
function flatArrayOfBeforeAndAfterBlocks(rootNode, beforeBlockRecognizer, afterBlockRecognizer, matchedBlocks = []) {
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