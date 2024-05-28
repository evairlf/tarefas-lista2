const prompt = require('prompt-sync')();
const { createNegativeAndNullVet } = require('./createMatrix');

let numb = createNegativeAndNullVet(100);

console.log(numb);

let numbersFiltered = numb.filter(numerinho => numerinho > 0 && numerinho !== null);

console.log(numbersFiltered);