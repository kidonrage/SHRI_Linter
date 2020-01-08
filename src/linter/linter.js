import {findBlocksIn} from '../services/blocksService';
import warningCheckers from './warning/';

export default class Linter {

  constructor(configuration) {
    this.blocksToCheck = configuration.blocks;
  }

  lint(blocks) {
    const errors = this.blocksToCheck.map((blockName) => {
      const blocksToCheck = findBlocksIn(blocks, blockName);
      return this[blockName](blocksToCheck)
    })

    // 2d blocks errors array to 1d
    const flatErrors = [].concat(...errors);

    return flatErrors;
  }

  warning(blocks) {
    const {checkTextDifference, checkButtonSize} = warningCheckers;

    const errors = blocks.map((block) => {
      return [
        checkTextDifference(block),
        checkButtonSize(block)
      ]
    });

    // 2d warning errors array to 1d
    const flatErrors = [].concat(...errors).filter((error) => error != null)

    return flatErrors;
  }

}