import parse from 'json-to-ast';
import {convertAstTreeToList, getASTChildrenOf} from './astService';

function getMixedBlocksOf(node) {
  if (Array.isArray(node)) {
    return [];
  }

  const mixValue = node.mix;

  if (!mixValue || mixValue.length === 0) {
    return [];
  }

  let mixedBlocks = [];
  if (Array.isArray(mixValue)) {
    mixedBlocks = mixValue.filter(mixin => mixin.block && !mixin.elem);
  } else if (mixValue.block && !mixValue.elem) {
    mixedBlocks.push(mixValue);
  }

  return [].concat(mixedBlocks);
}

function getChildrenOf(node) {
  // Получаем контент массива
  if (Array.isArray(node)) {
    return node;
  }

  const content = node.content;

  if (!content) {
    return [];
  }

  // Контент - объект
  return [].concat(content);
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

      const nodeChildren = getChildrenOf(node)

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

function isBlock(node) {
  const childrenKeys = node.children.map((child) => {
    return child.key.value;
  })

  if (childrenKeys.includes('block')) {
    return true;
  }

  return false;
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

  const blockChildren = getChildrenOf(block);
  const astChildren = getASTChildrenOf(astBlockRepresentation);

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