import Linter from './linter';
import {getBlocks} from './services/blocksService';

import checkTextDifference from './linter/warning/textDifference';

export default function lint(jsonString) {
  const linterConfig = {
    blocks: ['warning']
  }
  const linter = new Linter(linterConfig);

  const blocks = getBlocks(jsonString);

  const errors = linter.lint(blocks);

  console.log(errors);

  return errors;
}