import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {convertTreeToList} from '../../services/blocksService';
import {placeholderSizes} from '../enums/sizes';

function checkPlaceholderSize(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const placeholders = nodes.filter((node) => {
    return node.block === 'placeholder';
  });

  if (placeholders.length === 0) {
    return []
  }

  const invalidPlaceholders = placeholders.filter((placeholder) => {
    return !placeholderSizes.includes(placeholder.mods.size);
  })

  const isPlaceholdersValid = invalidPlaceholders.length === 0;

  if (!isPlaceholdersValid) {
    const errors = invalidPlaceholders.map((invalidPlaceholder) => {
      const error = new LinterError(
        warningErrors.placeholderSize,
        invalidPlaceholder.location
      )
    
      return error;
    });
  
    return errors;
  }

  return [];
}

export default checkPlaceholderSize;