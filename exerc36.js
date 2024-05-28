const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

const chosen = [
    55, 29, 64, 96, 48,
    27, 53, 59, 63, 91,
    47, 60, 1
  ];

const luckyNumber = {card: 112303, numb: [
    55, 29, 64, 96, 48,
    27, 53, 59, 63, 91,
    47, 60, 1
  ]};

function createGambler() {
    let gambler = [];
    gambler.card = card = Math.floor(Math.random()*10000000);
    let numb = [];
    for (let index = 0; index < 13; index++) {
        numb.push(Math.floor(Math.random()*100));
    };
    gambler.numb = numb;
    return gambler;
}

let bet = [];

for (let index = 0; index < 100; index++) {
  bet.push(createGambler());  
};
bet.push(luckyNumber);

function checkWinner(chosen, bet){
    let count;
    for(const element of bet){
        count = chosen.filter(numberz => element.numb.includes(numberz)).length;
        console.log(`O bilhete de número ${element.card} teve ${count} acertos.`);
        if(count === chosen.length){
            console.log("Parabéns, tu foi o GANHADOR.");
        }
    } 
}

checkWinner(chosen, bet);