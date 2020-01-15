import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findRootBlocksWithName} from '../../services/nodeSearchService';
import {placeholderSizes} from '../enums/sizes';

function checkPlaceholderSize(warningBlock) {
  const placeholders = findRootBlocksWithName(warningBlock, 'placeholder');

  const invalidPlaceholders = placeholders.filter(placeholder => placeholder.mods ? !placeholderSizes.includes(placeholder.mods.size) : true);

  const isPlaceholdersValid = invalidPlaceholders.length === 0;

  if (isPlaceholdersValid) {
    return [];
  }

  return LinterError.getErrorsForBlocks(warningErrors.placeholderSize, invalidPlaceholders);
}

export default checkPlaceholderSize;