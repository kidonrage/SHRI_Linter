import LinterError from '../linterError';
import {getContentOf, getModValuesOf} from '../linterService';

function checkTextDifference(warningBlock) {
  const content = getContentOf(warningBlock);
  const textSizes = getModValuesOf(content, 'size');

  const isSizesEqual = textSizes.every( size => size === textSizes[0] )

  if (!isSizesEqual) {
    const error = new LinterError(
      "WARNING.TEXT_SIZES_SHOULD_BE_EQUAL",
      "Тексты в блоке warning должны быть одного размера",
      warningBlock.loc
    )
  
    return [error];
  }

  return [];
}

export default checkTextDifference;