import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {convertTreeToList} from '../../services/blocksService';

function checkButtonPosition(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const buttons = nodes.filter((node) => {
    return node.block === 'button';
  });
  const placeholders = nodes.filter((node) => {
    return node.block === 'placeholder';
  });

  if (buttons.length === 0 || placeholders.length === 0) {
    return []
  }

  const invalidButtons = placeholders.filter((placeholder) => {
    let isInvalid = false;

    const placeholderIndex = nodes.indexOf(placeholder);

    buttons.forEach(button => {
      const buttonIndex = nodes.indexOf(button);
      if (buttonIndex < placeholderIndex && button.depth >= placeholder.depth) {
        isInvalid = true;
      }
    });

    return isInvalid;
  })

  const isButtonsValid = invalidButtons.length === 0;
  
  if (!isButtonsValid) {
    const errors = invalidButtons.map((invalidButton) => {
      const error = new LinterError(
        warningErrors.buttonPosition,
        invalidButton.location
      )
    
      return error;
    })

    return errors;
  }

  return [];
}

export default checkButtonPosition;