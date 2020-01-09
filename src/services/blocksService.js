import parse from 'json-to-ast';

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
      if (Array.isArray(node)) {
        stack.unshift(...node);
        continue;
      }

      node.depth = depth;

      // console.log('node', node)

      array.push(node);

      if(!node.content) {
        if (isPreviousDeeper) {
          depth--;
          isPreviousDeeper = true
        }
        
        continue;
      } else {
        isPreviousDeeper = false;
        depth++;

        if (Array.isArray(node.content)) {
          stack.unshift(...node.content)
        } else {
          stack.unshift(node.content)
        }
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

function getChildrenOf(node) {
  if (node.type === 'Array') {
    return node.children;
  }

  if (!node.children) {
    return null;
  }

  const contentProperty = node.children.find((child) => {
    return child.key.value === 'content'
  })

  if (!contentProperty) {
    return null
  }

  return contentProperty.value
}

function convertAstTreeToList(root) {
  let stack = [], array = [];

  // Root - всегда объект с полем type (Array либо Object)
  const rootIsArray = root.type === 'Array'
  if (rootIsArray) {
    stack.push(...root.children);
  } else {
    stack.push(root);
  }

  while(stack.length !== 0) {
      let node = stack.shift();

      // В контенте можно встретить массивы объектов на одном уровне с объектами;
      if (node.type === 'Array') {
        stack.unshift(...node.children);
        continue;
      }

      array.push(node);
      
      const nodeChildren = getChildrenOf(node);
      // console.log('node', node);
      // node.children.forEach(child => {
      //   console.log('child', child)
      // });
      // console.log('\n');
      // console.log('nodeChildren', nodeChildren)

      if (!nodeChildren) {
        continue;
      } else {
        if (nodeChildren.type === 'Array') {
          stack.unshift(...nodeChildren.children);
        } else {
          stack.unshift(nodeChildren)
        }
      }
  }

  return array;
}

function getBlocksWithLocation(blocks, astBlocks) {
  const blockWithLocation = blocks.map((block, index) => {
    let result = block;

    const astBlock = astBlocks[index];

    // console.log('result', result);
    // console.log('astBlock', astBlock);

    if (result.content) {
      let content = [].concat(result.content);
       
      let astChildren = getChildrenOf(astBlock);
      if (astChildren.type === 'Array') {
        astChildren = astChildren.children;
      } else {
        astChildren = [astChildren];
      }
      // console.log('content', content);
      // console.log('astChildren', astChildren);

      const contentWithLoc = content.map((contentBlock, index) => {
        const {start, end} = astChildren[index].loc;
        return {
          ...contentBlock, 
          location: {
            start,
            end
          }
        }
      })

      result.content = contentWithLoc;
    }

    const {start, end} = astBlock.loc;
    return {
      ...result, 
      location: {
        start,
        end
      }
    }
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

  // console.log(blocksList.length, astBlocksList.length)

  const blocksWithLocation = getBlocksWithLocation(blocksList, astBlocksList);

  return blocksWithLocation;
}

export function findBlocksIn(blocks, blockName) {
  return blocks.filter((block) => {
    return block.block === blockName;
  })
}