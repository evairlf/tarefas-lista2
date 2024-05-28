const prompt = require('prompt-sync')();
const { createPositive, printMatrix } = require('./createMatrix');

let dados = {numeros: 42, strings: "Bom dia e OLA MUNDO TUTUTUTUTU", arrays: [1,3,4,5,6,7,8], arraysStringoticas: ["Fica Ligero com o fusca", "Ele veio a milao vruummm"]};

function onlyArrays(dat) {
    let arrayzona = [];

    for (const chave in dat) {
        console.log(chave);
        if (dat[chave] instanceof Array) {
            arrayzona[chave] = dat[chave];
        }
    }
    return arrayzona;
}

console.log(onlyArrays(dados));
