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

export function getASTContent(ASTObject) {
  const contentProperty = findPropertyIn(ASTObject, 'content');

  if (!contentProperty) {
    return null;
  }

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

  // Если в входящей строке в массиве находились другие массивы
  roots.forEach((root, index) => {
    while (roots[index].type === 'Array') {
      roots.splice(index, 1, ...roots[index].children);
    }
  })

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