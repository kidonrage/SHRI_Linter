import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findRootBlocks} from '../../services/graphService';

function checkTextDifference(warningBlock) {
  const textBlocks = findRootBlocks(warningBlock, 'text');
  
  // Если в блоке нет текста
  if (textBlocks.length === 0) {
    return [];
  }

  const textSizes = textBlocks.map((block) => {
    return block.mods.size;
  })

  const referenceSize = textSizes[0];

  const invalidSizes = textSizes.filter( size => {
    return size != referenceSize
  })

  const isSizesEqual = invalidSizes.length === 0;

  if (!isSizesEqual) {
    const error = new LinterError(
      warningErrors.textSize,
      warningBlock
    );
  
    return error;
  }

  return [];
}

export default checkTextDifference;