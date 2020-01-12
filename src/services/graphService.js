import {getASTRoots, getASTContent, parseASTLocation} from './astService';

export function getRoots(json) {
  if (json.length === 0) {
    return [];  
  }

  let roots = [];
  try {
    const parsedJSON = JSON.parse(json);
    roots = Array.isArray(parsedJSON) ? [].concat(...parsedJSON) : [parsedJSON];
  } catch(error) {
    console.error('Invalid JSON: ', error);
  }

  // Если в входящей строке в массиве находились другие массивы
  roots.forEach((root, index) => {
    while (Array.isArray(roots[index])) {
      roots = roots.flat();
    }
  })

  console.log('roots', roots)

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

export function findRootBlocks(rootNode, blockName) {
  const nodeName = rootNode.block;
  
  if (nodeName === blockName) {
    return [rootNode];
  }

  const nodeContent = rootNode.content;

  if (!nodeContent || nodeContent.length === 0) {
    return [];
  }

  const contentArr = [].concat(nodeContent);

  const rootBlocks = contentArr.map(childNode => findRootBlocks(childNode, blockName));

  return [].concat(...rootBlocks).filter(block => block)
}

export function findRootBlocksWithModValue(rootNode, blockName, modName, modValue) {
  const rootBlocks = findRootBlocks(rootNode, blockName);
  
  const rootBlocksWithModValue = rootBlocks.filter(block => {
    if (!block.mods) {
      return false
    }

    return block.mods[modName] === modValue;
  })

  return rootBlocksWithModValue;
}

export function findRootBlocksWithMod(rootNode, blockName, modName) {
  const rootBlocks = findRootBlocks(rootNode, blockName);
  
  const rootBlocksWithMod = rootBlocks.filter(block => {
    if (!block.mods) {
      return false;
    }
    
    return block.mods[modName];
  })

  return rootBlocksWithMod;
}

export function findPositionInvalidBlocks(rootNode, beforeBlockRecognizer, afterBlockRecognizer) {
  const recognizedBlocks = [].concat(...findBlocksBefore(rootNode, beforeBlockRecognizer, afterBlockRecognizer));

  const beforeBlocks = recognizedBlocks.filter(block => beforeBlockRecognizer(block));
  const afterBlocks = recognizedBlocks.filter(block => afterBlockRecognizer(block));

  if (afterBlocks.length > 0) {
    let invalidBlocks = [];
    afterBlocks.forEach(afterBlock => {
      const temp = beforeBlocks.filter(beforeBlock => {
        return recognizedBlocks.indexOf(beforeBlock) < recognizedBlocks.indexOf(afterBlock) && beforeBlock.depth <= afterBlock.depth
      })

      invalidBlocks = [...invalidBlocks, ...temp];
    })

    return invalidBlocks;
  }

  return [];
}

export function findBlocksBefore(rootNode, beforeBlockRecognizer, afterBlockRecognizer, matchedBlocks = []) {
  let result = matchedBlocks;

  if (afterBlockRecognizer(rootNode)) {
    return [...result, rootNode];
  }

  if (beforeBlockRecognizer(rootNode)) {
    result = [...result, rootNode];
  }

  const nodeContent = rootNode.content ? [].concat(rootNode.content) : [];

  if (nodeContent.length === 0) {
    return result;
  }

  return [].concat(...nodeContent.map(child => findBlocksBefore(child, beforeBlockRecognizer, afterBlockRecognizer, result)));
}

export function findAllElementsInBlock(block, elemName) {
  const blockElementName = block.elem;

  if (blockElementName === elemName) {
    return [block]
  }

  const blockContent = block.content;

  if (!blockContent || blockContent.length === 0) {
    return [];
  }

  const contentArr = [].concat(blockContent);

  const elements = contentArr.map(childNode => findAllElementsInBlock(childNode, elemName));

  return [].concat(...elements);
}

export function findNodeIn(rootNode, nodeRecognizer = (node) => false) {
  if (nodeRecognizer(rootNode)) {
    return rootNode;
  }

  const nodeContent = rootNode.content;

  if (!nodeContent || nodeContent.length === 0) {
    return null;
  }

  const contentArr = [].concat(nodeContent);

  let foundNode = null;
  
  contentArr.forEach(childNode => {
    const nodeFoundInChildNode = findNodeIn(childNode, nodeRecognizer);

    if (!nodeFoundInChildNode || foundNode) {
      return;
    }

    foundNode = nodeFoundInChildNode;
  });

  return foundNode;
}