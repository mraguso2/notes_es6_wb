import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout';


console.log(addTax(100, 0.15));

// it will take a little longer - it is grabbing dependecies
console.log('Yay it works');
console.log(kebabCase('Mike is awesome'));