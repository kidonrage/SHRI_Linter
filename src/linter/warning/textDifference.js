import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {convertTreeToList, findAllBlocks} from '../../services/blocksService';

function checkTextDifference(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const textBlocks = findAllBlocks(nodes, 'text');
  
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
    const errors = invalidSizes.map((invalidSize) => {
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