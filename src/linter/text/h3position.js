import LinterError from '../errors/linterError';
import textErrors from '../errors/text';
import {findAllBlocksWithMod} from '../../services/blocksService';

function checkH3Position(blocks) {
  const h3Headers = findAllBlocksWithMod(blocks, 'text', 'type', 'h3');
  const h2Headers = findAllBlocksWithMod(blocks, 'text', 'type', 'h2');

  if (h3Headers.length === 0 || h2Headers.length === 0) {
    return []
  }
  
  const invalidh3Headers = h3Headers.filter((h3Header) => {
    let isInvalid = false;

    const h3Index = blocks.indexOf(h3Header);

    h2Headers.forEach(h2Header => {
      const h2Index = blocks.indexOf(h2Header);
      if (h3Index < h2Index && h3Header.depth >= h2Header.depth) {
        isInvalid = true;
      }
    });

    return isInvalid;
  })

  const isPositionValid = invalidh3Headers.length === 0;
  
  if (!isPositionValid) {
    const errors = invalidh3Headers.map((invalidHeader) => {
      const error = new LinterError(
        textErrors.h3Position,
        invalidHeader.location
      );
    
      return error;
    })

    return errors;
  }

  return [];
}

export default checkH3Position;