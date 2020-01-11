import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {h1HeaderRecognizer, h2HeaderRecognizer} from './recognizers';
import {findPositionInvalidBlocks} from '../../services/graphService';

function checkH2Position(graph) {
  const invalidH2Headers = findPositionInvalidBlocks(graph, h2HeaderRecognizer, h1HeaderRecognizer);

  const isPositionValid = invalidH2Headers.length === 0;
  
  if (!isPositionValid) {
    const errors = invalidH2Headers.map((invalidHeader) => {
      const error = new LinterError(
        textErrors.h2Position,
        invalidHeader
      );
    
      return error;
    })

    return errors;
  }

  return [];
}

export default checkH2Position;