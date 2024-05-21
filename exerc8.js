const prompt = require('prompt-sync')();
let exerciseTime = 0;

function exerciseCount(exercise) {
    if(exercise <= 10){
        return exercise * 2;
    }else if(exercise > 10 && exercise <= 20){
        return exercise * 5;
    }else{
        return exercise * 10;
    }
}

do {
    exerciseTime = parseInt(prompt('Quantas horas de exercicio voce fez este mês?'));
    let points = exerciseCount(exerciseTime);
    console.log(`voce recebeu R$` + points* 0.05 + ` pelo seu esforço esse mês com ` + points + ` pontos`);
} while (exerciseTime === 0 || exerciseTime < 0);


