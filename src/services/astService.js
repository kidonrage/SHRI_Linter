function getMixedASTBlocksOf(node) {
  if (node.type === 'Array') {
    return [];
  }

  const mixProperty = node.children.find((child) => {
    return child.key.value === 'mix'
  });

  if (!mixProperty || mixProperty.value === 0) {
    return [];
  }

  const mixValue = mixProperty.value

  let mixedBlocks = [];
  if (mixValue.type === 'Array') {
    mixedBlocks = mixValue.children.filter(mixin => {
      const blockProperty = mixin.children.find((child) => {
        return child.key.value === 'block'
      })
      const elemProperty = mixin.children.find((child) => {
        return child.key.value === 'elem'
      })
      return blockProperty && !elemProperty
    });
  } else {
    const blockProperty = mixin.children.find((child) => {
      return child.key.value === 'block'
    })
    const elemProperty = mixin.children.find((child) => {
      return child.key.value === 'elem'
    })

    if (blockProperty && !elemProperty) {
      mixedBlock.push(mixValue);
    }
  }

  return [].concat(mixedBlocks);
}

export function getASTChildrenOf(node) {
  if (!node.children) {
    return [];
  }

  if (node.type === 'Array') {
    return node.children;
  }

  const contentProperty = node.children.find((child) => {
    return child.key.value === 'content'
  })

  // Нет контента
  if (!contentProperty) {
    return []
  }

  const contentValue = contentProperty.value;

  if (contentValue.type === "Array") {
    return contentValue.children;
  }

  // Контент - объект
  return [contentProperty.value]
}

export function convertAstTreeToList(root) {
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
      // if (node.type === 'Array') {
      //   stack.unshift(...node.children);
      //   continue;
      // }

      array.push(node);

      const nodeMixins = getMixedASTBlocksOf(node);
      array.push(...nodeMixins);
      
      const nodeChildren = getASTChildrenOf(node);
      // console.log('node', node);
      // node.children.forEach(child => {
      //   console.log('child', child)
      // });
      // console.log('\n');
      // console.log('nodeChildren', nodeChildren)

      if (nodeChildren.length === 0) {
        continue;
      } else {
        stack.unshift(...nodeChildren);
      }
  }

  return array;
}