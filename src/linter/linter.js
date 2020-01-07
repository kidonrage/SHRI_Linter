import LinterError from './linterError';
import {findBlocksIn} from '../services/blocksService';
import checkTextDifference from './warning/textDifference';

export default class Linter {

  constructor(configuration) {
    this.blocksToCheck = configuration.blocks;
  }

  lint(blocks) {
    const errors = this.blocksToCheck.map((blockName) => {
      const blocksToCheck = findBlocksIn(blocks, blockName);
      return this[blockName](blocksToCheck)
    })

    const filteredErrors = [].concat(...errors).filter((error) => error != null)

    return filteredErrors;
  }

  warning(blocks) {
    const errors = blocks.map((block) => {
      return checkTextDifference(block);
    });

    return errors;
  }

}