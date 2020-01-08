import parse from 'json-to-ast';

export function convertTreeToList(root) {
  let stack = [], array = [];

  const rootIsArray = Array.isArray(root)
  if (rootIsArray) {
    stack.push(...root);
    console.log('stack', stack)
  } else {
    stack.push(root);
  }

  let depth = 0;
  let isPreviousDeeper = false

  while(stack.length !== 0) {
      let node = stack.shift();
      node.depth = depth;

      console.log('node', node)

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
        console.log('node.content', node.content)
        if (Array.isArray(node.content)) {
          stack.unshift(...node.content)
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

  const contentProperty = node.children.find((child) => {
    return child.key.value === 'content'
  })

  if (!contentProperty) {
    return []
  }

  return contentProperty.value.children
}

function convertAstTreeToList(root) {
  let stack = [], array = [];

  const rootIsArray = root.type === 'Array'
  if (rootIsArray) {
    stack.push(...root.children);
  } else {
    stack.push(root);
  }

  while(stack.length !== 0) {
      let node = stack.shift();

      array.push(node);
      
      const nodeChildren = getChildrenOf(node);

      if (nodeChildren.length === 0) {
        continue;
      } else {
        stack.unshift(...nodeChildren)
      }
  }

  return array;
}

function getBlocksWithLocation(blocks, astBlocks) {
  const blockWithLocation = blocks.map((block, index) => {
    let result = block;

    const astBlock = astBlocks[index];

    if (result.content) {
      const astChildren = getChildrenOf(astBlock);

      const contentWithLoc = result.content.map((contentBlock, index) => {
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
  console.log('blockList', blocksList);

  const ast = parse(jsonString);
  const astBlocksList = convertAstTreeToList(ast);

  const blocksWithLocation = getBlocksWithLocation(blocksList, astBlocksList);
  return blocksWithLocation;
}

export function findBlocksIn(blocks, blockName) {
  return blocks.filter((block) => {
    return block.block === blockName;
  })
}