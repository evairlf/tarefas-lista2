const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let count = 0;
let matrix = createPositive(10, 10);

function sumDiagUp(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = i+1; j < a[0].length; j++) {
            sum+= a[i][j];
        }
    }
    return sum;
}

function sumDiagDown(a) {
    let sum = 0;
    for (let i = 1; i < a.length; i++) {
        for (let j = 0; j < i; j++) {
            sum+= a[i][j];
        }
    }
    return sum;
}

printMatrix(matrix);
console.log("A soma dos numeros acima da diagonal principal são: " + sumDiagUp(matrix));
console.log("A soma dos numeros abaixo da diagonal principal são: " +sumDiagDown(matrix));