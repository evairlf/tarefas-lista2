const prompt = require('prompt-sync')();

let numbers = [];

for (let index = 1; index <= 10; index++) {
    numbers.push(prompt(`Digite o ${index}º numero: `));
}

for (let i = 0; i < numbers.length; i++){
    if(numbers[i]%2==0){
        console.log(`O número ${numbers[i]} é par e está armazenado na posição: ` + (i+1));
    }
}