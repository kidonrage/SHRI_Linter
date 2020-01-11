import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findRootBlocks} from '../../services/graphService';
import {convertTreeToList} from '../../services/blocksService';

function checkButtonPosition(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const buttons = findRootBlocks(warningBlock, 'button');
  const placeholders = findRootBlocks(warningBlock, 'placeholder');

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
        invalidButton
      )
    
      return error;
    })

    return errors;
  }

  return [];
}

export default checkButtonPosition;