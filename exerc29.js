const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let count = 0;
let matrix = createPositive(5, 5);

function sumLine(a) {
    let sum = 0;
    for (let i = 4; i < a.length; i++) {
        for (let j = 0 ; j < a[0].length; j++) {
            sum+= a[i][j];
        }
    }
    return sum;
}

function sumColumn(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 2 ; j <= 2; j++) {
            sum+= a[i][j];
        }
    }
    return sum;
}

function sumDiag(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
            sum+= a[i][i];
    }
    return sum;
}

function sumAll(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0 ; j < a.length; j++) {
            sum+= a[i][j];
        }
    }
    return sum;
}

printMatrix(matrix);
console.log("A soma da linha 4 da matriz: " + sumLine(matrix));
console.log("A soma da coluna 2 da matriz: " + sumColumn(matrix));
console.log("A soma da diagonal principal da matriz: " + sumDiag(matrix));
console.log("A soma de todos os elementos da matriz: " +sumAll(matrix));