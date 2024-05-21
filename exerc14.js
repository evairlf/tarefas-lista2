const prompt = require('prompt-sync')();

let names = [];

for (let index = 1; index <= 7; index++) {
    names.push(prompt(`Digite o ${index} nome: `));
}

console.log(names.reverse().toString());