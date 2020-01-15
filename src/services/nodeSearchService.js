import {nodeRecognizer, findAllRootNodesIn, findAllNodesIn, flatArrayOfBeforeAndAfterBlocks} from './nodeService';

/** 
 * Возвращает все корневые блоки с именем blockName
*/
export function findRootBlocksWithName(rootNode, blockName) {
  const blockRecognizer = nodeRecognizer(blockName);

  return findAllRootNodesIn(rootNode, blockRecognizer);
}
/** 
 * Возвращает все блоки с именем blockName
*/
export function findBlocksWithName(rootNode, blockName) {
  const blockRecognizer = nodeRecognizer(blockName);

  return findAllNodesIn(rootNode, blockRecognizer);
}

/** 
 * Возвращает все корневые блоки с модификатором modName, имеющим значение modValue
*/
export function findRootBlocksWithModValue(rootNode, blockName, modName, modValue) {
  const blockRecognizer = nodeRecognizer(blockName, modName, modValue);

  return findAllRootNodesIn(rootNode, blockRecognizer);
}
/** 
 * Возвращает все блоки с модификатором modName, имеющим значение modValue
*/
export function findBlocksWithModValue(rootNode, blockName, modName, modValue) {
  const blockRecognizer = nodeRecognizer(blockName, modName, modValue);

  return findAllNodesIn(rootNode, blockRecognizer);
}

/** 
 * Возвращает все блоки, у которых определен модификатор modName
*/
export function findRootBlocksWithMod(rootNode, blockName, modName) {
  const blockRecognizer = nodeRecognizer(blockName, modName);

  return findAllRootNodesIn(rootNode, blockRecognizer)
}
/** 
 * Возвращает все блоки, у которых определен модификатор modName
*/
export function findBlocksWithMod(rootNode, blockName, modName) {
  const blockRecognizer = nodeRecognizer(blockName, modName);

  return findAllNodesIn(rootNode, blockRecognizer)
}

/** 
 * Возвращает все элементы elemName в блоке
*/
export function findAllElementsInBlock(block, elemName) {
  const elementRecognizer = nodeRecognizer(null, null, null, {elem: elemName});
  return findAllNodesIn(block, elementRecognizer);
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