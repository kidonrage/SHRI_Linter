import LinterError from '../errors/linterError';
import gridErrors from '../errors/grid';
import {convertTreeToList} from '../../services/blocksService';
import {infoFuncTional, marketing} from '../enums/contentBlocks';

function checkAds(gridBlock) {

  const columnsCount = parseInt(gridBlock.mods['m-columns'], 10);

  const columnBlocks = convertTreeToList(gridBlock).filter(child => child.elem === 'fraction');

  const childBlocks = columnBlocks.map(column => {

    const columnSize = parseInt(column.elemMods['m-col'], 10);

    let isMarketing = false;

    const columnNodesList = convertTreeToList(column);

    const block = columnNodesList.find((node) => {
      isMarketing = false; 

      if (marketing.includes(node.block)) {
        isMarketing = true
      }

      return isMarketing || infoFuncTional.includes(node.block);
    });
     
    return {
      ...block,
      isMarketing,
      sizeInColumns: columnSize
    }
  });

  const marketingBlocks = childBlocks.filter(block => block.isMarketing);
  const marketingColumnsCount = marketingBlocks.map(block => block.sizeInColumns);

  const isGridValid = marketingColumnsCount / columnsCount < 0.5;
  
  if (!isGridValid) {
    const error = new LinterError(
      gridErrors.advertisements,
      gridBlock.location
    );
  
    return error;
  }

  return null;
}

export default checkAds;