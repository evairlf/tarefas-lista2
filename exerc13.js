const prompt = require('prompt-sync')();

function fibo(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibo(num - 1) + fibo(num - 2);
    }
}

function fiboArray(size) {
    let fibo_numbers = [];
    for (let index = 1; index <= size; index++) {
        fibo_numbers.push(fibo(index));
    }
    return fibo_numbers;
}

const sizeFibo = 15;
const valuesFibo = fiboArray(sizeFibo); 

console.log(`Os primeiros ${sizeFibo} números da sequencia de fibonacci são: ` + valuesFibo.toString());

