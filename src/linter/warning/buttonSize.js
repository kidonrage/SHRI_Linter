import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {convertTreeToList} from '../../services/blocksService';

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

  console.log(buttonSize, properButtonSize, referenceSize)

  return buttonSize === properButtonSize;
}

function checkButtonSize(warningBlock) {
  console.log('waeningBlock', warningBlock.content[1]);
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

  const invalidButtons = buttons.filter((button) => {
    return !(isButtonSizeValid(button.mods.size, referenceSize));
  });

  const isSizesValid = invalidButtons.length === 0;

  if (!isSizesValid) {
    const errors = invalidButtons.map((button) => {
      console.log(button)
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