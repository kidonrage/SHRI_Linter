import {findRootBlocksWithName} from '../services/nodeSearchService';
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

  lint(rootNodes) {
    if (rootNodes.length < 1) {
      return [];
    }

    const errors = rootNodes.map(rootNode => {
      const nodeErrors = this.blocksToCheck.map((blockName) => {
        return this[blockName](rootNode)
      })

      return [].concat(...nodeErrors)
    })

    // 2d blocks errors array to 1d
    const flatErrors = [].concat(...errors).filter((error) => error != null);

    return flatErrors;
  }

  warning(rootNode) {
    const {textDifference, buttonSize, buttonPosition, placeholderSize} = warningCheckers;

    const warningBlocks = findRootBlocksWithName(rootNode, 'warning');

    const errors = warningBlocks.map((block) => {
      const blockErrors = [
        ...textDifference(block),
        ...buttonSize(block),
        ...buttonPosition(block),
        ...placeholderSize(block)
      ]

      return blockErrors;
    });

    return [].concat(...errors);
  }

  text(rootNode) {
    const {h1Severalty, h2Position, h3Position} = textCheckers;

    const errors = [
      ...h1Severalty(rootNode),
      ...h2Position(rootNode),
      ...h3Position(rootNode)
    ]

    return errors;
  }

  grid(rootNode) {
    const {advertisements} = gridCheckers;

    const blocksToCheck = findRootBlocksWithName(rootNode, 'grid');

    const errors = blocksToCheck.map((block) => {
      return [
        advertisements(block),
      ]
    });

    return [].concat(...errors);
  }

}