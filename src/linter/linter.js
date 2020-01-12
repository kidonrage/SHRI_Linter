import {findRootBlocks} from '../services/graphService';
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

  lint(graphs) {
    if (graphs.length < 1) {
      return [];
    }

    const errors = graphs.map(rootGraph => {
      const graphErrors = this.blocksToCheck.map((blockName) => {
        return this[blockName](rootGraph)
      })

      return [].concat(...graphErrors)
    })

    // 2d blocks errors array to 1d
    const flatErrors = [].concat(...errors).filter((error) => error != null);

    return flatErrors;
  }

  warning(graph) {
    const {textDifference, buttonSize, buttonPosition, placeholderSize} = warningCheckers;

    const warningBlocks = findRootBlocks(graph, 'warning');

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

  text(graph) {
    const {h1Severalty, h2Position, h3Position} = textCheckers;

    const errors = [
      ...h1Severalty(graph),
      ...h2Position(graph),
      ...h3Position(graph)
    ]

    return errors;
  }

  grid(graph) {
    const {advertisements} = gridCheckers;

    const blocksToCheck = findRootBlocks(graph, 'grid');

    const errors = blocksToCheck.map((block) => {
      return [
        advertisements(block),
      ]
    });

    return [].concat(...errors);
  }

}