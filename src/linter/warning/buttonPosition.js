import LinterError from '../errors/linterError';
import warningErrors from '../errors/warning';
import {findChildBlocksPlacedBeforeOtherBlocks} from '../../services/graphService';

const buttonRecognizer = (block) => {
  return block.block === 'button'
}

const placeholderRecognizer = (block) => {
  return block.block === 'placeholder'
}

function checkButtonPosition(warningBlock) {
  const invalidButtons = findChildBlocksPlacedBeforeOtherBlocks(warningBlock, buttonRecognizer, placeholderRecognizer);

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