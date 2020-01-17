// *** Функции для работы с AST ***

import parseToAST from 'json-to-ast';

const findPropertyIn = (astObject, propertyName) => {
  return astObject.children.find((child) => {
    return child.key && child.key.value === propertyName
  });
}

export function getASTContent(ASTObject) {
  const contentProperty = findPropertyIn(ASTObject, 'content');

  if (!contentProperty) {
    return null;
  }

  const ASTContent = contentProperty.value;

  return ASTContent;
}

export function getASTMix(node) {
  const mixProperty = findPropertyIn(node, 'mix')

  if (!mixProperty) {
    return null;
  }

  return mixProperty.value
}

/** 
 * Возвращает все корневые ноды в JSON в виде AST-объектов
*/
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

/** 
 * Возвращает отформатированную локацию AST-объекта
*/
export const parseASTLocation = (ASTBlock) => {
  // const {line: startLine, column: startColumn} = ASTBlock.loc.start;
  // const {line: endLine, column: endColumn} = ASTBlock.loc.end;
  const {start} = ASTBlock.loc;
  const {end} = ASTBlock.loc;

  return {
    start,
    end
  }
}