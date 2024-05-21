const prompt = require('prompt-sync')();

let travelingKm = parseInt(prompt('Quantos Kilometros deseja viajar?'));
const valueSmallKilometer = parseFloat(0.50);
const valueLargeKilometer = parseFloat(0.45);

function ticketValue(distance) {
    return distance > 200 ? distance * valueLargeKilometer : distance * valueSmallKilometer;
}

console.log("O valor a ser pago da passagem é: R$" + ticketValue(travelingKm) );