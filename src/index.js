import Linter from './linter';
import {getGraphs} from './services/graphService';

export default function lint(jsonString) {
  const linter = new Linter();

  const rootGraphs = getGraphs(jsonString);
  
  const errors = linter.lint(rootGraphs);

  console.log('RESULT', errors);

  return errors;
}

global.lint = lint;