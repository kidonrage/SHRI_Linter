import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {findAllBlocksWithMod} from '../../services/blocksService';

function checkH1Severalty(blocks) {
  const h1Headers = findAllBlocksWithMod(blocks, 'text', 'type', 'h1');

  if (h1Headers.length < 1) {
    return []
  }

  const isHeadersValid = h1Headers.length === 1;

  if (!isHeadersValid) {
    const errors = h1Headers.slice(1).map((invalidHeader) => {
      const error = new LinterError(
        textErrors.severalH1,
        invalidHeader.location
      );
    
      return error;
    })
    
    return errors;
  }

  return [];
}

export default checkH1Severalty;