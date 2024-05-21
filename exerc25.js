const prompt = require('prompt-sync')();
const { forEach } = require('lodash');
const { printMatrix, createRealNumbers, createNegative} = require('./createMatrix');


let matrix = createRealNumbers(15, 20);

let sumColumns = [];

for (let i = 0 ; i < matrix[0].length;i++) {
    let sum = 0;
    for (const element of matrix) {
        sum += element[i];
    }
    sumColumns.push(sum.toFixed(2));
}

console.log("A SOMA DE TODAS COLUNAS É:\n" + sumColumns.join(" | "));