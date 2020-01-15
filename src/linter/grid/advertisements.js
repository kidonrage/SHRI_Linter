import LinterError from '../errors/linterError';
import gridErrors from '../errors/grid';
import {findAllElementsInBlock} from '../../services/nodeSearchService';
import {findNodeIn} from '../../services/nodeService';
import {marketing} from '../enums/contentBlocks';

function checkAds(gridBlock) {
  const columnsCount = parseInt(gridBlock.mods['m-columns'], 10);

  const columnBlocks = findAllElementsInBlock(gridBlock, 'fraction');

  const marketingBlocks = [];
  
  columnBlocks.forEach(column => {
    const columnSize = parseInt(column.elemMods['m-col'], 10);

    const marketingNode = findNodeIn(column, (node) => {
      const nodeBlockName = node.block;

      return marketing.includes(nodeBlockName);
    })

    if (marketingNode) {
      marketingBlocks.push({
        ...marketingNode,
        sizeInColumns: columnSize
      })
    }
  });

  const marketingColumnsSizes = marketingBlocks.map(block => block.sizeInColumns);
  const marketingColumnsCount = marketingColumnsSizes.reduce((prevValue, currentValue) => prevValue + currentValue, 0);

  const isGridValid = marketingColumnsCount / columnsCount < 0.5;
  
  if (isGridValid) {
    return null;
  }

  return new LinterError(
    gridErrors.advertisements,
    gridBlock
  );
}

export default checkAds;