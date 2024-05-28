const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let numbers = createPositive(50,5);
let loto = [ 65, 6, 4, 75, 39];

function winnerChecker(lot, vet) {
    for (const element of vet) {
        let count = 0;
        let id = 0;
        count = lot.filter(numberz => element.includes(numberz)).length;
        if(count === 5){
        console.log('Ganhador');
        }
    }
}

numbers.push(loto);

winnerChecker(loto, numbers);