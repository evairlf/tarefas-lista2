const prompt = require('prompt-sync')();

let a = parseInt(prompt('digite o tamanho do lado A: '));
let b = parseInt(prompt('digite o tamanho do lado B: '));
let c = parseInt(prompt('digite o tamanho do lado C: '));

function isTriangle(a,b,c) {
    return (a < (b+c) && b < (a+c) && c < (a+b))? "pode formar um triangulo" : "nao pode formar um triangulo";
}

console.log(isTriangle(a,b,c));