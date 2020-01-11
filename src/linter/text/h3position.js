import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {h2HeaderRecognizer, h3HeaderRecognizer} from './recognizers';
import {findPositionInvalidBlocks} from '../../services/graphService';

function checkH3Position(graph) {
  const invalidH3Headers = findPositionInvalidBlocks(graph, h3HeaderRecognizer, h2HeaderRecognizer);
  
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