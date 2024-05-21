const { forEach } = require('lodash');

const prompt = require('prompt-sync')();

let stop = true;
let menPayment = 0;
let womanPayment = 0;

do {
    switch (parseInt(prompt('Se voce deseja adcionar uma funcionária Mulher digite 1 se deseja adcionar um funcionário Homem digite 2 ' + 
    'ou se quer sair do programa e somar os salarios de cada genero digite 0'))) {
        case 1:
            womanPayment += parseFloat(prompt('Qual o pagamento da funcionária?'));
            break;
        case 2:
            menPayment += parseFloat(prompt('Qual o pagamento do funcionário?'));
            break;
        case 0:
            console.log(`Os homens recebem ao todo R$`+ menPayment.toFixed(2) + `\nAs mulheres recebem ao todo R$` + womanPayment.toFixed(2));
            stop = false;
            break;
    }
} while (stop);