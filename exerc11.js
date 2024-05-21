const prompt = require('prompt-sync')();

let sum = 0;
let count = 0;
let numbers = '';

function pA(term, purpose) {
    sum+= term;
    for (let index = 1; index <= 10; index++) {
        if(index === 1){
            console.log(`${index}º Termo: ${term}`);
        }else{
            sum+=purpose;
            console.log(`${index}º Termo: ${term} + ${purpose} = ${sum}`);
            term = sum;
        }
    }
    
}

pA(2,3);