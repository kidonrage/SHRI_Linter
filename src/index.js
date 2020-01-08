import Linter from './linter';
import {getBlocks} from './services/blocksService';

export default function lint(jsonString) {
  const linterConfig = {
    blocks: [
      'warning'
    ]
  }
  const linter = new Linter(linterConfig);

  const blocks = getBlocks(jsonString);

  const errors = linter.lint(blocks);

  return errors;
}

global.lint = lint;