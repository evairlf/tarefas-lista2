const { forEach } = require('lodash');

const prompt = require('prompt-sync')();

/*const habitantes = [
{ salary: '1000', children: '2' },
{ salary: '3000', children: '2' },
{ salary: '3000', children: '4' },
{ salary: '3000', children: '5' },
{ salary: '30000', children: '12' },
{ salary: '350', children: '1' },
{ salary: '340', children: '1' },
{ salary: '345', children: '1' },
{ salary: '330', children: '1' },
{ salary: '300', children: '1' }];*/
//Se o professor quiser testar mais facilmente só comentar o let habitantes e o while e descomentar este

let habitantes = [];
let averageSalary = 0;
let averageChildrens = 0;
let greaterSalary = Number.NEGATIVE_INFINITY;
let salar = 0;
let childrens = 0;
let percent = 0;
let percentPersons = 0;
let stop = true;
let validation = 1;

while (stop) {
    validation = parseInt(prompt('voce deseja adcionar mais pessoas a tabela da cidade? se sim digite 1 se quiser emitir a tabela digite 0'));
    switch (validation) {
        case 1:
            let pessoa = {
                salary: prompt("qual é o salario?"),
                children: prompt("qual é o numero de filhos?")
            }
            habitantes.push(pessoa);
            break;

        default:

            habitantes.forEach(element => {
                childrens += parseInt(element.children);
                salar += parseInt(element.salary);
                if (element.salary > greaterSalary) {
                    greaterSalary = element.salary;
                }
                if (element.salary <= 350) {
                    percent++;
                }
            });

            averageSalary = salar / (habitantes.length + childrens);
            averageChildrens = childrens / habitantes.length;
            percentPersons = (percent / habitantes.length) * 100;

            console.log("RESULTADO DA PESQUISA");
            console.log(`A média salarial da populacao é: ${averageSalary.toFixed(2)},\nA média de numero de filhos é: ${averageChildrens.toFixed(0)}` +
                `\nO maior salário registrado R$: ${greaterSalary}\nPercentual de pessoas com salario de até R$350 é de ${percentPersons.toFixed(0)}%`);
                stop = false;
                break;
    }
}