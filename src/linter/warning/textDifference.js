import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findBlocksWithName} from '../../services/graphService';

function checkTextDifference(warningBlock) {
  const textBlocks = findBlocksWithName(warningBlock, 'text');

  const textBlocksWithSize = textBlocks.filter(block => {
    if (!block.mods) {
      return false
    }

    return block.mods.size;
  })
  
  // Если в блоке нет текста
  if (textBlocks.length === 0) {
    return [];
  }

  const textSizes = textBlocksWithSize.map((block) => {
    return block.mods.size;
  })

  const referenceSize = textSizes[0];

  const invalidBlocks = textBlocks.filter(block => {
    return !block.mods || block.mods.size !== referenceSize
  })

  const isSizesEqual = invalidBlocks.length === 0;

  if (!isSizesEqual) {
    const errors = invalidBlocks.map((invalidSize) => {
      const error = new LinterError(
        warningErrors.textSize,
        warningBlock
      );
    
      return error;
    });
  
    return errors;
  }

  return [];
}

export default checkTextDifference;