import {findBlocksIn, findRootBlocksIn} from '../services/blocksService';
import warningCheckers from './warning';
import textCheckers from './text';
import gridCheckers from './grid';

const defaultConfig = {
  blocks: [
    'warning',
    'text',
    'grid'
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
    const flatErrors = [].concat(...errors).filter((error) => error != null);

    return flatErrors;
  }

  warning(blocks) {
    const {textDifference, buttonSize, buttonPosition, placeholderSize} = warningCheckers;

    const blocksToCheck = findBlocksIn(blocks, 'warning');

    const errors = blocksToCheck.map((block) => {
      return [
        ...textDifference(block),
        ...buttonSize(block),
        ...buttonPosition(block),
        ...placeholderSize(block)
      ]
    });

    return [].concat(...errors);
  }

  text(blocks) {
    const {h1Severalty, h2Position, h3Position} = textCheckers;

    const errors = [
      ...h1Severalty(blocks),
      ...h2Position(blocks),
      ...h3Position(blocks)
    ]

    return errors;
  }

  grid(blocks) {
    const {advertisements} = gridCheckers;

    const blocksToCheck = findRootBlocksIn(blocks, 'grid');

    const errors = blocksToCheck.map((block) => {
      return [
        advertisements(block),
      ]
    });

    return [].concat(...errors);
  }

}