import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findRootBlocksWithName, findRootBlocksWithMod} from '../../services/nodeSearchService';

const isButtonSizeValid = (buttonSize, referenceSize) => {
  let properButtonSize = '';

  switch (referenceSize.slice(-1)) {
    case 'm':
      properButtonSize = 'l';
      break;
    case 'l':
      properButtonSize = 'x' + referenceSize;
      break;
    case 's': {
      if (referenceSize === 's') {
        properButtonSize = 'm';
        break;
      }
      properButtonSize = referenceSize.substr(1);
      break;
    }
  }

  return buttonSize === properButtonSize;
}

function checkButtonSize(warningBlock) {
  const buttons = findRootBlocksWithName(warningBlock, 'button');
  const textBlocks = findRootBlocksWithMod(warningBlock, 'text', 'size');

  const textSizes = textBlocks.map((block) => {
    return block.mods.size;
  })

  if (!textSizes.length || !buttons.length) {
    return [];
  }

  const referenceSize = textSizes[0];

  const invalidButtons = buttons.filter(button => button.mods ? !isButtonSizeValid(button.mods.size, referenceSize) : true);

  const isSizesValid = invalidButtons.length === 0;

  if (isSizesValid) {
    return [];
  }

  return LinterError.getErrorsForBlocks(warningErrors.buttonSize, invalidButtons);
}

export default checkButtonSize;