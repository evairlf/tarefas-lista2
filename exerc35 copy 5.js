const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let even = [];
let odd = [];

function vectorFill(num, even , odd) {
    num.forEach(element => {
        if(even.length === 5){
            console.log("Vetor de Pares encheu: \n" + even);
            even = [];
        }else if(odd.length === 5){
            console.log("Vetor de Impares encheu: \n" + odd);
            odd = [];
        }
        if(element%2==0){
            even.push(element);
        }else{
            odd.push(element);
        }
    });
    console.log(even);
    console.log(odd);
}
vectorFill(numbers,even,odd);