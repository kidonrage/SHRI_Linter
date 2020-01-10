import parse from 'json-to-ast';
import {convertAstTreeToList, getChildASTBlocksIn} from './astService';

const isBlock = (node) => {
  return node.content || (node.block && !node.elem);
}

function getMixedBlocksOf(node) {
  const mixValue = node.mix;

  if (!mixValue) {
    return [];
  }

  let mixedNodes = [].concat(mixValue);

  const mixedBlocks = mixedNodes.filter(mixin => isBlock(mixin));

  return mixedBlocks;
}

function getChildBlocksIn(node) {
  console.log('nodeee', node)
  let nodeChildren = node;

  if (!Array.isArray(node)) {
    // Ищем контент объекта и забираем если есть
    nodeChildren = node.content ? [].concat(node.content) : [];
  }

  const blocks = nodeChildren.filter(child => isBlock(child))

  console.log('child nodeeees', blocks)
  
  return [].concat(blocks);
}

export function convertTreeToList(root) {
  let stack = [], array = [];

  const rootIsArray = Array.isArray(root)
  if (rootIsArray) {
    stack.push(...root);
  } else {
    stack.push(root);
  }

  let depth = 0;
  let isPreviousDeeper = false

  while(stack.length !== 0) {
      let node = stack.shift();

      node.depth = depth;

      array.push(node);

      const nodeMixins = getMixedBlocksOf(node).map((mixedBlock) => {
        return {
          ...mixedBlock,
          depth: depth
        }
      });
      array.push(...nodeMixins);

      const nodeChildren = getChildBlocksIn(node)

      if(nodeChildren.length === 0) {
        if (isPreviousDeeper) {
          depth--;
          isPreviousDeeper = true
        }
        
        continue;
      } else {
        isPreviousDeeper = false;
        depth++;

        stack.unshift(...nodeChildren)
      }
  }

  return array;
}

function applyLocationsToBlock(block, astBlockRepresentation) {
  const {start, end} = astBlockRepresentation.loc;
  const result = {
    ...block,
    location: {
      start,
      end
    }
  }

  const blockChildren = getChildBlocksIn(block);
  const astChildren = getChildASTBlocksIn(astBlockRepresentation);

  const childrenWithLocation = blockChildren.map((child, index) => {
    const astChild = astChildren[index];
    return applyLocationsToBlock(child, astChild);
  });

  if (blockChildren.length > 0) {
    if (Array.isArray(result.content)) {
      // Контент - массив
      result.content = childrenWithLocation;
    } else {
      // Контент - объект
      result.content = childrenWithLocation[0];
    }
  }

  return result;
}

function getBlocksWithLocation(blocks, astBlocks) {
  const blockWithLocation = blocks.map((block, index) => {
    let result = block;

    const astBlock = astBlocks[index];  

    return applyLocationsToBlock(result, astBlock);
  });

  return blockWithLocation;
}

export function getBlocks(jsonString) {
  if (jsonString.length === 0) {
    return [];  
  }

  let json = {};
  try {
    json = JSON.parse(jsonString);
  } catch(e) {
    console.error('Invalid JSON');
    return []
  }
  
  const blocksList = convertTreeToList(json);

  const ast = parse(jsonString);
  const astBlocksList = convertAstTreeToList(ast);

  console.log(blocksList.length, astBlocksList.length);

  const blocksWithLocation = getBlocksWithLocation(blocksList, astBlocksList);

  console.log(blocksWithLocation.length)

  return blocksWithLocation;
}

export function findBlocksIn(blocks, blockName) {
  return blocks.filter((block) => {
    return block.block === blockName;
  })
}

export function findBlock(list, blockName) {
  return list.find((block) => {
    return block.block === blockName && !block.elem
  });
}

export function findBlockWithMod(list, blockName, modName, modValue) {
  return list.find((block) => {
    if (!block.mods) {
      return false
    }

    return block.block === blockName && !block.elem && block.mods[modName] === modValue;
  }); 
}

export function findAllBlocks(list, blockName) {
  return list.filter((block) => {
    return block.block === blockName && !block.elem
  }); 
}

export function findAllBlocksWithMod(list, blockName, modName, modValue) {
  return list.filter((block) => {
    if (!block.mods) {
      return false
    }

    return block.block === blockName && !block.elem && block.mods[modName] === modValue;
  }); 
}