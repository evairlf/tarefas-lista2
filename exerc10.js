const { isNumber, isNaN } = require('lodash');

const prompt = require('prompt-sync')();

let sum = 0;
let min = Number.MAX_VALUE;
let pair = 0;
let value = 0;
let count = 0;
let stop = true;

do {
    value = parseInt(prompt('Digite um valor ou se nao quiser continuar digite 0'));
    switch (value) {
        case 0:
            stop = false;
            break;
        default:
            sum += value;
            count ++;
            if(value < min){min = value;}
            if(value%2===0){pair++;}
            break;
    }    
} while (stop);

console.log(`Somatório entre os valores digitados: `+ sum + `\nMenor valor digitado: `+ min + `\nMedia entre todos valores digitados: ` + (sum/count)+
 `\nQuantos desses valores sao pares: ` + pair);