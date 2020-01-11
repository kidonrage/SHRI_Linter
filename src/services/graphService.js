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

    const rootObjWithLoc = applyLocation(rootObj, rootASTObj);

    console.log(JSON.stringify(rootObjWithLoc));
    return rootObjWithLoc
  });
  
  return graphs;
}

function applyLocation(block, ASTBlock) {
  if (Array.isArray(block) && ASTBlock.type === 'Array') {
    return block.map((childBlock, index) => {
      return applyLocation(childBlock, ASTBlock.children[index])
    })
  }

  const blockContent = block.content;

  if (!blockContent) {
    return {
      ...block,
      location: parseASTLocation(ASTBlock)
    }
  }

  const ASTBlockContent = getASTContent(ASTBlock);

  const contentWithLocation = applyLocation(blockContent, ASTBlockContent);

  let result = {
    ...block,
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

  return contentArr.map(childNode => findRootBlocks(childNode, blockName));
}