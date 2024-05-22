const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let matrix = createPositive(12, 13);

function lineValue(a, line) {
    let max = 0;
    for (let i = line; i <= line; i++) {
        for (let j = i; j < a[0].length; j++) {
            if (Math.abs(a[i][j]) > max) {
                max = Math.abs(a[i][j]);
            }
        }
    }
    return max;
}

function lineMod(a) {
    let matriz = [];
    for (let i = 0; i < a.length; i++) {
        matriz[i] = [];
        let mod = lineValue(a, i);
        for (let j = 0; j < a[i].length; j++) {
            matriz[i][j] = (a[i][j]/mod).toFixed(2);
        }
    }
    return matriz;
}
console.log('Matriz normal:');
printMatrix(matrix);
console.log('Matriz modificada:');
printMatrix(lineMod(matrix));