import LinterError from './linterError';
import {findBlocksIn} from '../services/blocksService';

export default class Linter {

  constructor(configuration) {
    this.blocksToCheck = configuration.blocks;
  }

  lint(blocks) {
    const errors = this.blocksToCheck.map((blockName) => {
      const blocksToCheck = findBlocksIn(blocks, blockName);
      return this[blockName](blocksToCheck)
    })

    return errors;
  }

  warning(blocks) {
    const error = new LinterError(
      "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
      "Тексты в блоке warning должны быть одного размера",
      {
        start: {
          line: 1,
          column: 1
        },
        end: {
          line: 7,
          column: 2
        }
      }
      // warningBlock.loc
    )
  
    return [error];
  }

}