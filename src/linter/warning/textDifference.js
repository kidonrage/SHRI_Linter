import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findRootBlocksWithName} from '../../services/nodeSearchService';

function checkTextDifference(warningBlock) {
  const textBlocks = findRootBlocksWithName(warningBlock, 'text');
  const textBlocksWithSize = textBlocks.filter(block => block.mods && block.mods.size);
  const textSizes = textBlocksWithSize.map(block => block.mods.size);

  if (!textSizes.length) {
    return [];
  }

  const referenceSize = textSizes[0];

  const invalidBlocks = textBlocks.filter(block => {
    return !block.mods || block.mods.size !== referenceSize
  })

  const isSizesEqual = invalidBlocks.length === 0;

  if (isSizesEqual) {
    return []
  }

  return LinterError.getErrorsForBlocks(warningErrors.textSize, invalidBlocks);
}

export default checkTextDifference;