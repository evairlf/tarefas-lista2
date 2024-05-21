const prompt = require('prompt-sync')();

let hours = [];

function formatHour(hour) {
    let regex = /^(?:2[0-3]|[01]?\d):[0-5]\d:[0-5]\d$/;
    return regex.test(hour);
}

for (let i = 0; i < 5; i++) {
    let hour = prompt('Digite a hora no formato padrão de HH.MM.SS ');

    while(!formatHour(hour)){
         hour = prompt('Formato invalido, por favor digite a hora no formato HH.MM.SS ');
    }

    hours.push(hour);
}

console.log('horas registradas');
hours.forEach(element => {
    console.log(element);
});