import Linter from './linter';
import {getBlocks} from './services/blocksService';

export default function lint(jsonString) {
  const linter = new Linter();

  const blocks = getBlocks(jsonString);

  const errors = linter.lint(blocks);

  console.log(errors);

  return errors;
}

global.lint = lint;