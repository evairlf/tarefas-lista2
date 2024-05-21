const prompt = require('prompt-sync')();

let currentSpeed = parseInt(prompt('Qual é a velocidade do veiculo?'));
const speedMax = parseFloat(80);
const penaltyPerKm = parseFloat(5.00);

function penalty(speed) {
    let penaltyzed;
    if(speed > speedMax){
        penaltyzed = (speed - speedMax)*penaltyPerKm;
        return console.log("Foi multado em R$" + penaltyzed);
    } 
}

penalty(currentSpeed);