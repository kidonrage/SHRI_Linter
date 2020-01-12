import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findBlocksWithName} from '../../services/graphService';
import {placeholderSizes} from '../enums/sizes';

function checkPlaceholderSize(warningBlock) {
  const placeholders = findBlocksWithName(warningBlock, 'placeholder');

  if (placeholders.length === 0) {
    return []
  }

  const invalidPlaceholders = placeholders.filter((placeholder) => {
    if (!placeholder.mods) {
      return true;
    }

    return !placeholderSizes.includes(placeholder.mods.size);
  })

  const isPlaceholdersValid = invalidPlaceholders.length === 0;

  if (!isPlaceholdersValid) {
    const errors = invalidPlaceholders.map((invalidPlaceholder) => {
      const error = new LinterError(
        warningErrors.placeholderSize,
        invalidPlaceholder
      )
    
      return error;
    });
  
    return errors;
  }

  return [];
}

export default checkPlaceholderSize;