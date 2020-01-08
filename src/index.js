import Linter from './linter';
import {getBlocks} from './services/blocksService';

export default function lint(jsonString) {
  const linter = new Linter();

  const blocks = getBlocks(jsonString);
  blocks.forEach((block) => {
    console.log('block location', block.location)
  })

  const errors = linter.lint(blocks);
  console.log(errors);

  errors.forEach((error) => {
    console.log('error.location', error.location);
  })

  return errors;
}

global.lint = lint;