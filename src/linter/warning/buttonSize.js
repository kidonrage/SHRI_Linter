import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
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

  if (buttons.length < 1 || !firstTextBlock) {
    return []
  }

  const referenceSize = firstTextBlock.mods.size;
  const referenceSizeIdx = sizes.indexOf(referenceSize);

  const invalidButtons = buttons.filter((button) => {
    return button.mods.size !== sizes[referenceSizeIdx + 1];
  });

  const isSizesValid = invalidButtons.length === 0;

  if (!isSizesValid) {
    const errors = invalidButtons.map((button) => {
      const error = new LinterError(
        warningErrors.buttonSize,
        button.location
      )
    
      return error;
    });
  
    return errors;
  }

  return [];
}

export default checkButtonSize;