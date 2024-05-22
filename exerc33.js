const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let matrix = createPositive(3, 3);

function averageSecondary(a) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < a.length;) {
        for (let j = a[0].length-1; j >= i-2; j--) {
            sum+= a[i][j];
            count++;
            i++;
        }
    }
    return sum/count;
}

function lineMod(a) {
    let elements = [];
    let average = averageSecondary(a);
    for (let i = 0; i < a.length; i++) {
        elements.push(parseInt(a[i][i] * average));
    }
    return elements;
}

function multplyElements(a) {
    
}

printMatrix(matrix);
console.log(averageSecondary(matrix));
console.log(lineMod(matrix));
