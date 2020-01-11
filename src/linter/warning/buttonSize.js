import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findRootBlocks} from '../../services/graphService';

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
  const buttons = findRootBlocks(warningBlock, 'button');
  const textBlocks = findRootBlocks(warningBlock, 'text');

  if (textBlocks.length < 1 || buttons.length < 1) {
    return [];
  }
  
  const textBlocksWithSize = textBlocks.filter(block => {
    if (!block.mods) {
      return false
    }

    return block.mods.size;
  })

  const textSizes = textBlocksWithSize.map((block) => {
    return block.mods.size;
  })

  const referenceSize = textSizes[0];

  const invalidButtons = buttons.filter((button) => {
    return !(isButtonSizeValid(button.mods.size, referenceSize));
  });

  const isSizesValid = invalidButtons.length === 0;

  if (!isSizesValid) {
    const errors = invalidButtons.map((button) => {
      const error = new LinterError(
        warningErrors.buttonSize,
        button
      )
    
      return error;
    });
  
    return errors;
  }

  return [];
}

export default checkButtonSize;