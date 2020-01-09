import {findBlocksIn} from '../services/blocksService';
import warningCheckers from './warning';
import textCheckers from './text';

const defaultConfig = {
  blocks: [
    'warning',
    'text'
  ]
}

export default class Linter {

  constructor(configuration = defaultConfig) {
    this.blocksToCheck = configuration.blocks;
  }

  lint(blocks) {
    if (blocks.length < 1) {
      return [];
    }

    const errors = this.blocksToCheck.map((blockName) => {
      return this[blockName](blocks)
    })

    // 2d blocks errors array to 1d
    const flatErrors = [].concat(...errors);

    return flatErrors;
  }

  warning(blocks) {
    const {textDifference, buttonSize, buttonPosition, placeholderSize} = warningCheckers;

    const blocksToCheck = findBlocksIn(blocks, 'warning');

    if (!blocksToCheck) {
      return [];
    }

    const errors = blocksToCheck.map((block) => {
      return [
        ...textDifference(block),
        buttonSize(block),
        buttonPosition(block),
        placeholderSize(block)
      ]
    });

    // 2d warning errors array to 1d
    const flatErrors = [].concat(...errors).filter((error) => error != null);

    return flatErrors;
  }

  text(blocks) {
    const {h1Severalty, h2Position, h3Position} = textCheckers;

    const errors = [
      ...h1Severalty(blocks),
      ...h2Position(blocks),
      ...h3Position(blocks)
    ]

    const flatErrors = [].concat(...errors).filter((error) => error != null);

    return flatErrors;
  }

}