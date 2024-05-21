const prompt = require('prompt-sync')();



function createMatrix() {
    let matrix = [];
    for(let i = 0; i < 7 ; i++){
        matrix[i] = [];
        for(let k = 0; k < 7 ; k++){
            matrix[i][k] = i===k ? 1 : null;
        }
    }   
    return matrix; 
}

function showMatrix(matrix) {
   for (let line of matrix) {
        console.log(line.toString());
   }
}

showMatrix(createMatrix());



