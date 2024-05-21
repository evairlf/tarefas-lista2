const prompt = require('prompt-sync')();

let result = parseInt(Math.floor(Math.random()*5)+1);
let valueTrue = false;
do {
let valor = parseInt(prompt('Qual o valor que voce acha que é?'));
valueTrue = result === valor ? true : false;
console.log('errou tenta denovo');
} while (!valueTrue);
console.log("Acertou Mizeravi");
