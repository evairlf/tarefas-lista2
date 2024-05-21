const prompt = require('prompt-sync')();

let coWorker = {};

coWorker.name = prompt('digite o nome do funcionário: ');
coWorker.role = prompt('digite o cargo do funcionário: ');
coWorker.salary = prompt('digite o salario do funcionário: ');

console.log(`Nome: ${coWorker.name}\nCargo: ${coWorker.role}\nSalario: ${coWorker.salary}`);
