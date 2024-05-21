const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let matrix = createPositive(6, 6);

function vectorMatrix(matrix,a) {
    let vector = [];
    for (const line of matrix) {
        for (const num of line) {
            vector.push(num*a);
        }
    }
    return vector;
}
console.log("Matriz gerada:");
printMatrix(matrix);
console.log("---------------------");
console.log('Resultado da função');
console.log(vectorMatrix(matrix,3));