import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {convertTreeToList} from '../../services/blocksService';
import {placeholderSizes} from '../enums/sizes';

function checkPlaceholderSize(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const placeholder = nodes.find((node) => {
    return node.block === 'placeholder';
  });

  if (!placeholder) {
    return null
  }

  const placeholderSize = placeholder.mods.size

  const isSizeValid = placeholderSizes.includes(placeholderSize);

  if (!isSizeValid) {
    const error = new LinterError(
      warningErrors.placeholderSize,
      placeholder.location
    )
  
    return error;
  }

  return null;
}

export default checkPlaceholderSize;