import LinterError from '../errors/linterError';
import {warning as warningErrors} from '../errors/errorsList';
import {convertTreeToList} from '../../services/blocksService';
import sizes from '../enums/sizes';

function checkButtonSize(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const buttons = nodes.filter((node) => {
    return node.block === 'button';
  });
  const firstTextBlock = nodes.find((node) => {
    return node.block === 'text';
  });

  const standardSize = firstTextBlock.mods.size;
  const standardSizeIdx = sizes.indexOf(standardSize);

  const buttonSizes = buttons.map((button) => {
    return button.mods.size;
  })
  

  const isSizesValid = buttonSizes.every( size => size === sizes[standardSizeIdx + 1] )

  if (!isSizesValid) {
    const error = new LinterError(
      warningErrors.buttonSize,
      warningBlock.location
    )
  
    return error;
  }

  return null;
}

export default checkButtonSize;