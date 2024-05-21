const prompt = require('prompt-sync')();
const { printMatrix, createPositive } = require('./createMatrix');

let matrixA = createPositive(3, 5);
let matrixB = createPositive(3, 5);


function countMatrix(a, b) {
    let product = [];
    for (let i = 0; i < a.length; i++) {
        product[i] = [];
        for (let j = 0; j < b[0].length; j++) {
            product[i][j] = a[i][j] * b[i][j];
        }
    }
    return product;
}

console.log(`Matriz produto de A ${matrixA.length} x ${matrixA[0].length} * B ${matrixB.length} x ${matrixB[0].length}`);
console.log("----------------");
printMatrix(countMatrix(matrixA, matrixB));