const prompt = require('prompt-sync')();

function lifeTimeSmoker(cigarDays, yearsSmoking) {
    return parseInt(((cigarDays*10/60)*(365)*yearsSmoking/24));
}

let cigarDay = parseInt(prompt('Quantos cigarros por dia voce fuma?'));
let cigarYear = parseInt(prompt('Quantos anos ja fuma?'));
let cigarDaysLost = lifeTimeSmoker(cigarDay, cigarYear);
console.log("Voce ja perdeu um total de " + cigarDaysLost + " Dias de vida fumando");