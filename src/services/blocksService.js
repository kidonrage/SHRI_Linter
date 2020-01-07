import parse from 'json-to-ast';

function convertTreeToList(root) {
  var stack = [], array = [];
  stack.push(root);

  while(stack.length !== 0) {
      var node = stack.pop();
      array.push(node);

      if(!node.content) {
          continue;
      } else {
          for (var i = node.content.length - 1; i >= 0; i--) {
              stack.push(node.content[i]);
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
  const contentProperty = node.children.find((child) => {
    return child.key.value === 'content'
  })

  if (!contentProperty) {
    return []
  }

  return contentProperty.value.children
}

function convertAstTreeToList(root) {
  var stack = [], array = [];
  stack.push(root);

  while(stack.length !== 0) {
      var node = stack.pop();

      if (isBlock(node)) {
        array.push(node);
      }

      const nodeChildren = getChildrenOf(node);

      if (nodeChildren.length === 0) {
        continue;
      } else {
        for (var i = nodeChildren.length - 1; i >= 0; i--) {
          stack.push(nodeChildren[i]);
        }
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
        const {loc} = astChildren[index];
        return {...contentBlock, loc}
      })

      result.content = contentWithLoc;
    }

    const {loc} = astBlock;
    return {...result, loc}
  });

  return blockWithLocation;
}

export function getBlocks(jsonString) {
  const json = JSON.parse(jsonString);
  const blocksList = convertTreeToList(json);

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
