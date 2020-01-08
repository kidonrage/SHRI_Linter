import LinterError from '../errors/linterError';
import {warning as warningErrors} from '../errors/errorsList';
import {convertTreeToList} from '../../services/blocksService';
import sizes from '../enums/sizes';

function checkButtonSize(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const button = nodes.find((node) => {
    return node.block === 'button';
  });
  const firstTextBlock = nodes.find((node) => {
    return node.block === 'text';
  });

  if (!button || !firstTextBlock) {
    return null
  }

  const standardSize = firstTextBlock.mods.size;
  const standardSizeIdx = sizes.indexOf(standardSize);

  const buttonSize = button.mods.size;

  const isSizesValid = buttonSize === sizes[standardSizeIdx + 1];

  if (!isSizesValid) {
    const error = new LinterError(
      warningErrors.buttonSize,
      button.location
    )
  
    return error;
  }

  return null;
}

export default checkButtonSize;