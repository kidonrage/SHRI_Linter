import LinterError from '../errors/linterError';
import gridErrors from '../errors/grid';
import {findAllElementsInBlock, findNodeIn} from '../../services/graphService';
import {marketing} from '../enums/contentBlocks';

function checkAds(gridBlock) {
  const columnsCount = parseInt(gridBlock.mods['m-columns'], 10);

  const columnBlocks = findAllElementsInBlock(gridBlock, 'fraction');

  const marketingBlocks = columnBlocks.map(column => {
    const columnSize = parseInt(column.elemMods['m-col'], 10);

    const marketingNode = findNodeIn(column, (node) => {
      const nodeBlockName = node.block;

      return marketing.includes(nodeBlockName);
    })

    if (!marketingNode) {
      return null;
    }

    return {
      ...marketingNode,
      sizeInColumns: columnSize
    }
  }).filter(node => node);

  const marketingColumnsCount = marketingBlocks.map(block => block.sizeInColumns);

  const isGridValid = marketingColumnsCount / columnsCount < 0.5;
  
  if (!isGridValid) {
    const error = new LinterError(
      gridErrors.advertisements,
      gridBlock
    );
  
    return error;
  }

  return null;
}

export default checkAds;