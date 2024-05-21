const prompt = require('prompt-sync')();

let names = [];
let ages = [];

for (let index = 1; index <= 9; index++) {
    names.push(prompt(`Digite o ${index} nome: `));
    ages.push(prompt(`Digite a idade da pessoa: `));
}

function teen(names,ages) {
    for(let i = 0; i < 9 ; i++){
        if(ages[i] < 18){
            console.log(`${names[i]} é menor de idade`);
        }
    }
}

teen(names,ages);