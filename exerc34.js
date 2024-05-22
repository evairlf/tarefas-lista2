const prompt = require('prompt-sync')();
const { createRealNumbers, printMatrix } = require('./createMatrix');

let matrix = createRealNumbers(50, 50);

function multiplyLineDiag(a) {
    for (let i = 0; i < a.length; i++) {
        let numDig = 0;
        for (let j = 0; j < a[0].length; j++) {
            if (numDig === 0) {
               numDig = a[i][j];
            }
            a[i][j] = a[i][j] * numDig;
        }
    }
    return a;
}

console.log('Matriz normal:');
console.log(matrix);
console.log('Matriz modificada:');
console.log(multiplyLineDiag(matrix));