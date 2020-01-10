import LinterError from '../errors/linterError';
import textErrors from '../errors/text';

function checkH2Position(blocks) {
  const h2Headers = blocks.filter((block) => {
    if (!block.mods) {
      return false;
    }
    return block.block === 'text' && !block.elem && block.mods.type === 'h2';
  });
  const h1Header = blocks.find((block) => {
    if (!block.mods) {
      return false;
    }
    return block.block === 'text' && !block.elem && block.mods.type === 'h1';
  });

  if (h2Headers.length === 0 || !h1Header) {
    return []
  }

  const h1Index = blocks.indexOf(h1Header);
  const invalidH2Headers = h2Headers.filter((h2Header) => {
    const h2Index = blocks.indexOf(h2Header);
    return h2Index < h1Index && h2Header.depth >= h1Header.depth;
  })

  const isPositionValid = invalidH2Headers.length === 0;
  
  if (!isPositionValid) {
    const errors = invalidH2Headers.map((invalidHeader) => {
      const error = new LinterError(
        textErrors.h2Position,
        invalidHeader.location
      );
    
      return error;
    })

    return errors;
  }

  return [];
}

export default checkH2Position;