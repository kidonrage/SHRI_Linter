import Linter from './linter';
import {getRootNodesFromJSON} from './services/jsonService';

export default function lint(jsonString) {
  const linter = new Linter();

  const rootNodes = getRootNodesFromJSON(jsonString);
  
  const errors = linter.lint(rootNodes);
  
  console.log('RESULT', errors);

  return errors;
}

global.lint = lint;