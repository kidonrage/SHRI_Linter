// *** Функции, задействованные в JSON-парсинге ***

import {getASTRoots, getASTContent, parseASTLocation, getASTMix} from './astService';

/** 
 * Возвращает все корневые ноды в JSON
*/
export function getRootNodesFromJSON(json) {
  // Если в входящем json массив, нужно вернуть массив корневых объектов
  const roots = getRoots(json);
  if (roots.length === 0) {
    return [];
  }

  const ASTRoots = getASTRoots(json);

  console.log(roots.length, ASTRoots.length);

  const rootsWithLocation = roots.map((rootObj, index) => {
    const rootASTObj = ASTRoots[index];

    const rootObjWithLoc = applyServiceData(rootObj, rootASTObj);

    return rootObjWithLoc
  });
  
  return rootsWithLocation;
}

function getRoots(json) {
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

// Инъекцирует данные о локации и глубине вложенности
function applyServiceData(block, ASTBlock, depth = 0) {
  if (Array.isArray(block) && ASTBlock.type === 'Array') {
    return block.map((childBlock, index) => {
      return applyServiceData(childBlock, ASTBlock.children[index], depth + 1)
    })
  }

  const result = {
    ...block,
    depth,
    location: parseASTLocation(ASTBlock)
  }

  if (block.mix) {
    const ASTMix = getASTMix(ASTBlock);
    const mixWithLocation = applyServiceData(block.mix, ASTMix, depth);
    result.mix = mixWithLocation
  }
  

  const blockContent = block.content;

  if (!blockContent) {
    return result
  }

  const ASTBlockContent = getASTContent(ASTBlock);
  const contentWithLocation = applyServiceData(blockContent, ASTBlockContent, depth + 1);

  result.content = contentWithLocation;

  return result;
}