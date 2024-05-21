const { Module } = require("module");

function randomNumberNegativePositive() {
    return Math.floor(Math.random()*100)-50;
}

function randomNumberReal() {
    return parseFloat(Math.random()*100-50);
}

function randomNumberPositive() {
    return Math.floor(Math.random()*100)+1;
}

//MATRIX
function createNegative(c,l) {
    let matrix = [];
    for(let i = 0; i < c ; i++){
        matrix[i] = [];
        for(let k = 0; k < l ; k++){
            matrix[i][k] = randomNumberNegativePositive();
        }
    }
   return matrix; 
}

function createPositive(c,l) {
    let matrix = [];
    for(let i = 0; i < c ; i++){
        matrix[i] = [];
        for(let k = 0; k < l ; k++){
            matrix[i][k] = randomNumberPositive();
        }
    }
   return matrix; 
}

function createRealNumbers(c,l) {
    let matrix = [];
    for(let i = 0; i < c ; i++){
        matrix[i] = [];
        for(let k = 0; k < l ; k++){
            matrix[i][k] = randomNumberReal();
        }
    }
   return matrix; 
}

function printMatrix(m) {
    for (let all of m) {
        console.log(all.join(" "));
    }
}

module.exports = {createNegative, createPositive, createRealNumbers, printMatrix};
