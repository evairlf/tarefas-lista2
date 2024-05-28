const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let numbers = [1,2,3,4,5,6];

switch (parseInt(prompt('Digite o numero da operação que deseja fazer: \n1-somar os elementos \n2-produto dos elementos \n3-media dos elementos\n4-ordenacao dos elementos em ordem crescente\n5-mostrar o vetor\n'))) {
    case 1 :
        let sum = 0;
        for (const element of numbers) {
            sum += element;
        }
        console.log(`A soma dos elementos é ${sum}`);
        break;

    case 2:
        let prod = 1;
        for (const element of numbers) {
            prod *= element;
        }
        console.log(`O produto dos elementos é ${prod}`);
        break;

    case 3:
        let mid = 0;
        let all = 0;
        for (const numb of numbers) {
            all += numb;
        }
        mid = all/numbers.length;
        console.log(`A média dos elementos é ${mid}`);
        break;

    case 4:
        numbers.sort((a, b) => a - b);
        console.log(`A ordem crescente dos elementos é ${numbers}`);
        break;

    case 5:
        console.log(numbers);
        break;
    default:
        break;
}