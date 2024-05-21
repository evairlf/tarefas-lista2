const prompt = require('prompt-sync')();


// Função para calcular o salário líquido com base no salário bruto e na dedução do INSS
function calcularDeducaoINSS(salarioBruto) {
    return salarioBruto*0.12;
}

function calcularSalarioLiquido(salarioBruto, deducaoINSS){
    return salarioBruto - deducaoINSS;
}

// Array de objetos funcionário
var funcionarios = [];

// Gerar 80 objetos funcionário com valores aleatórios
for (var i = 1; i <= 80; i++) {
    var matricula = i;
    var nome = "Funcionário " + i;
    var salarioBruto = Math.random() * (10000 - 2000) + 2000; // Salário bruto entre R$ 2000 e R$ 10000
    var deducaoINSS = calcularDeducaoINSS(salarioBruto);
    var salarioLiquido = calcularSalarioLiquido(salarioBruto, deducaoINSS);

    var funcionario = {
        matricula: matricula,
        nome: nome,
        salarioBruto: salarioBruto.toFixed(2),
        deducaoINSS: deducaoINSS.toFixed(2),
        salarioLiquido: salarioLiquido.toFixed(2)
    };

    funcionarios.push(funcionario);
}

console.log("----LISTA DE FUNCIONÁRIOS----");

funcionarios.forEach(element => {
    console.log(`Matrícula: ${element.matricula}\nNome: ${element.nome}\nSalário Bruto: ${element.salarioBruto}`+
    `\nDedução do INSS: ${element.deducaoINSS}\nSalario Líquido: ${element.salarioLiquido}`);
    console.log("--------------------------------------");
});