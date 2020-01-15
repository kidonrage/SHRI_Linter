import {nodeRecognizer} from '../../services/nodeService';

export const h1HeaderRecognizer = nodeRecognizer('text', 'type', 'h1');
export const h2HeaderRecognizer = nodeRecognizer('text', 'type', 'h2'); 
export const h3HeaderRecognizer = nodeRecognizer('text', 'type', 'h3');