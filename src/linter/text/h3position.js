import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {h2HeaderRecognizer, h3HeaderRecognizer} from './recognizers';
import {findChildBlocksPlacedBeforeOtherBlocks} from '../../services/nodeSearchService';

function checkH3Position(rootNode) {
  const invalidH3Headers = findChildBlocksPlacedBeforeOtherBlocks(rootNode, h3HeaderRecognizer, h2HeaderRecognizer);
  
  const isPositionValid = invalidH3Headers.length === 0;
  
  if (!isPositionValid) {
    const errors = invalidH3Headers.map((invalidHeader) => {
      const error = new LinterError(
        textErrors.h3Position,
        invalidHeader
      );
    
      return error;
    })

    return errors;
  }

  return [];
}

export default checkH3Position;