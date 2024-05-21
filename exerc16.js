const prompt = require('prompt-sync')();

let numbers = [];

for (let i = 0; i < 20; i++) {
    numbers.push(Math.floor(Math.random()*99)+1);
}


console.log(numbers.sort(function(a,b){return a - b}));