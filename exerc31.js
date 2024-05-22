const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let matrix = createPositive(30, 30);

function count(a, v) {
    let count = 0;
    for (const line of a) {
        for (const element of line) {
            if (element === v) {
                count++;
            }
        }
    }
    return count;
}

function elementsDif(a, v) {
    let count = [];
    for (let i = 0; i < a.length; i++) {
        count[i] = [];
        for (let j = 0; j < a[0].length; j++) {
            if(a[i][j] !== v){
                count[i][j] = a[i][j];
            }
        }
    }
    return count;
}


printMatrix(matrix);
console.log("A quantidade de vezes que o numero fornecido se repete: " + count(matrix, 3));
console.log("A matriz sem o numero fornecido: ");
console.log(elementsDif(matrix,3));