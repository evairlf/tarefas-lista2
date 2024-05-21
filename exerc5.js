const prompt = require('prompt-sync')();

let play = true;
let jokenpo = 0;

function randomizeMachineChoice() {
    let result = Math.floor(Math.random()*3)+1;
    if(result === 1){
        return 'pedra';
    }else if(result === 2){
        return 'papel';
    }else{
        return 'tesoura';
    }
}

function resultPlay(playerChoice, machine) {
    if(playerChoice === machine){
        return 'Empate';
    }else if(playerChoice === 'papel' && machine === 'tesoura' || playerChoice === 'pedra' && machine === 'papel'){
        return 'voce perdeu!';
    }else{
        return 'voce venceu!';
    }
}   

do {
    switch (jokenpo = parseInt(prompt('Se quiser continuar jogando escolha 1 para pedra 2 para papel e 3 para tesoura, caso contrario digite 0'))) {
        case 1:
            console.log(resultPlay('pedra', randomizeMachineChoice()));
            break;
        case 2:
            console.log(resultPlay('papel', randomizeMachineChoice()));
            break;
        case 3:
            console.log(resultPlay('tesoura', randomizeMachineChoice()));
            break;
        default:
            console.log('valeu por jogar!');
            break;
    }

} while (jokenpo !== 0 || jokenpo > 3);