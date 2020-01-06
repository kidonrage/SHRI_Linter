import parse from 'json-to-ast';
import LinterError from './linter/linterError';
import Linter from './linter';

import checkTextDifference from './linter/warning/textDifference';

export default function lint(jsonString) {
  const linterConfig = {
    blocks: ['warning']
  }

  const linter = new Linter
  const settings = {
    loc: true,
  };

  const ast = parse(jsonString);

  console.log(JSON.stringify(ast));

  const errors = checkTextDifference(ast);

  return errors;
}