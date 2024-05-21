const { pseudoRandomBytes } = require('crypto');

const prompt = require('prompt-sync')();

function idealWeight(height, sex) {
    if (sex === 'mulher' || sex === 'muie' || sex === 'woman' || sex === 'feminino') {
        return (62.1 * height - 44.7).toFixed(2);
    } else {
        return (72.7 * height - 58).toFixed(2);
    }
}

let alt = prompt('Digite a altura: ');
let sex = prompt('Digite o sexo: ');

console.log("O peso ideal para o : " + sex + " é: " + idealWeight(alt, sex));