import parse from 'json-to-ast';
import {convertAstTreeToList, getASTChildrenOf} from './astService';

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

      // В контенте можно встретить массивы объектов на одном уровне с объектами;
      // if (Array.isArray(node)) {
      //   depth++;
      //   stack.unshift(...node);
      //   continue;
      // }

      node.depth = depth;

      array.push(node);

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

    // console.log('result', result);
    // console.log('astBlock', astBlock);

    return applyLocationsToBlock(result, astBlock);
    // if (result.content) {
    
    //   let content = [].concat(result.content);
       
    //   let astChildren = getASTChildrenOf(astBlock);
    //   // console.log('content', content);
    //   // console.log('astChildren', astChildren);

    //   const contentWithLoc = content.map((contentBlock, index) => {
    //     const {start, end} = astChildren[index].loc;
    //     return {
    //       ...contentBlock, 
    //       location: {
    //         start,
    //         end
    //       }
    //     }
    //   })

    //   result.content = contentWithLoc;
    // }

    // const {start, end} = astBlock.loc;

    // return {
    //   ...result, 
    //   location: {
    //     start,
    //     end
    //   }
    // }
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
    console.log('Invalid JSON');
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