import {getASTRoots, getASTContent, parseASTLocation} from './astService';

export function getRoots(json) {
  if (json.length === 0) {
    return [];  
  }

  let roots = [];
  try {
    roots = [].concat(JSON.parse(json));
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

  const graphs = roots.map((rootObj, index) => {
    const rootASTObj = ASTRoots[index];

    const rootObjWithLoc = applyServiceData(rootObj, rootASTObj);

    console.log(JSON.stringify(rootObjWithLoc));
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
    return null;
  }

  const contentArr = [].concat(nodeContent);

  const rootBlocks = contentArr.map(childNode => findRootBlocks(childNode, blockName));

  return [].concat(...rootBlocks).filter(block => block)
}

export function findRootBlocksWithMod(rootNode, blockName, modName) {
  const rootBlocks = findRootBlocks(rootNode, blockName);
  
  const rootBlocksWithMod = rootBlocks.filter(block => {
    if (!block.mods) {
      return false
    }

    return block.mods[modName] === modValue;
  })

  return rootBlocksWithMod;
}