const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let matrix = createPositive(5, 5);

function sumLine(a) {
    let sum = [];
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = 0; j < a[0].length; j++) {
            count+= a[i][j];
        }
        sum.push(count);
    }
    return sum;
}

function sumColumn(a) {
    let sum = [];
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = 0; j < a[0].length; j++) {
            count+= a[j][i];
        }
        sum.push(count);
    }
    return sum;
}

printMatrix(matrix);
console.log("A soma dos numeros pertencentes as linhas da matriz: " + sumLine(matrix));
console.log("A soma dos numeros pertencentes as colunas da matriz: " + sumColumn(matrix));