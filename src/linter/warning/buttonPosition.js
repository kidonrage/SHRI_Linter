import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {convertTreeToList} from '../../services/blocksService';

function checkButtonPosition(warningBlock) {
  const nodes = convertTreeToList(warningBlock);

  const button = nodes.find((node) => {
    return node.block === 'button';
  });
  const placeholder = nodes.find((node) => {
    return node.block === 'placeholder';
  });

  if (!button || !placeholder) {
    return null
  }

  const buttonIndex = nodes.indexOf(button);
  const placeholderIndex = nodes.indexOf(placeholder);

  const isPositionValid = buttonIndex > placeholderIndex;
  
  if (!isPositionValid) {
    const error = new LinterError(
      warningErrors.buttonPosition,
      button.location
    )
  
    return error;
  }

  return null;
}

export default checkButtonPosition;