const prompt = require('prompt-sync')();
const { createNegative, printMatrix, createRealNumbers } = require('./createMatrix');

let count = 0;
let matrix = createNegative(6, 8);

function countNegativeNumbers(matrix) {
    for (const line of matrix) {
        for (const num of line) {
            if (num < 0) {
                count++;
            }
        }
    }
    return count;
}

printMatrix(matrix);
console.log("os numeros negativos presentes na matrix são no total de " + countNegativeNumbers(matrix));