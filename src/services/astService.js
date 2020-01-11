import parseToAST from 'json-to-ast';

const findPropertyIn = (astObject, propertyName) => {
  return astObject.children.find((child) => {
    return child.key && child.key.value === propertyName
  });
}

const isBlock = (node) => {
  const contentProperty = findPropertyIn(node, 'content');

  if (contentProperty) {
    return true;
  }

  const blockProperty = findPropertyIn(node, 'block');
  const elemProperty = findPropertyIn(node, 'elem');

  return blockProperty && !elemProperty
}

function getMixedASTBlocksOf(node) {
  const mixProperty = findPropertyIn(node, 'mix')

  if (!mixProperty) {
    return [];
  }

  const mixValue = mixProperty.value

  let mixedNodes = mixValue.type === 'Array' ? mixValue.children : [].concat(mixValue);
  
  const mixedBlocks = mixedNodes.filter(mixin => {
    return isBlock(mixin);
  });

  return mixedBlocks;
}

export function getChildASTBlocksIn(node) {
  let childNodes = [];

  if (node.type === 'Array') {
    childNodes = [].concat(node.children);
  } else {
    const contentProperty = findPropertyIn(node, 'content');
    if (contentProperty) {
      const contentValue = contentProperty.value.type === 'Array' ? contentProperty.value.children : contentProperty.value;
      childNodes = [].concat(contentValue);
    }
  }

  const childBlocks = childNodes.filter(node => {
    return isBlock(node);
  });

  return childBlocks
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

      array.push(node);

      const nodeMixins = getMixedASTBlocksOf(node);
      array.push(...nodeMixins);
      
      const nodeChildren = getChildASTBlocksIn(node);

      if (nodeChildren.length === 0) {
        continue;
      } else {
        stack.unshift(...nodeChildren);
      }
  }

  return array;
}

export function getASTContent(ASTObject) {
  const contentProperty = findPropertyIn(ASTObject, 'content');

  const ASTContent = contentProperty.value;

  return ASTContent;
}

export function getASTRoots(json) {
  let astRootObject = {}
  try {
    astRootObject = parseToAST(json);
  } catch(error) {
    console.error('Invalid JSON: ', error);
  }
  
  let roots = astRootObject.type === 'Array' ? astRootObject.children : [].concat(astRootObject)

  return roots;
}

export const parseASTLocation = (ASTBlock) => {
  const {line: startLine, column: startColumn} = ASTBlock.loc.start;
  const {line: endLine, column: endColumn} = ASTBlock.loc.end;

  return {
    start: {
      line: startLine,
      column: startColumn
    },
    end: {
      line: endLine,
      column: endColumn
    }
  }
}