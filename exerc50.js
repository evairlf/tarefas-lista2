const prompt = require('prompt-sync')();
const hoteis = [
    { id: 1, nome: "Prazer", cidade: "Novo Hamburguer", quartosTotais: 20, quartosDisponiveis: 20 },
    { id: 2, nome: "Lazer", quartosTotais: 34, cidade: "Porto Alegre", quartosDisponiveis: 33 },
    { id: 3, nome: "Bolivia", quartosTotais: 24, cidade: "Rio Grande", quartosDisponiveis: 24 },
    { id: 4, nome: "Taubate", quartosTotais: 12, cidade: "Nova Roma", quartosDisponiveis: 12 },
    { id: 5, nome: "St. Angelo", quartosTotais: 90, cidade: "Novo Hamburguer", quartosDisponiveis: 90 }];

let contadorId = 2;
let reservas = [ {id: 1, nome: "gustavo", hotelReservado: hoteis[1]}];
let sair = false;

while (!sair) {
    switch (parseInt(prompt("Bem Vindo ao gerenciador de hoteis:\n" +
    "Digite 1 se deseja adcionar mais hoteis\nDigite 2 se deseja Buscar hoteis por cidade\n" +
    "Digite 3 se deseja fazer reserva\nDigite 4 se deseja cancelar uma reserva\n" +
    "Digite 5 se deseja listar todas as reservas\nDigite 0 se quer sair do programa"))) {
    case 1:
        let nome = prompt("Digite o nome do hotel");
        let cidade = prompt("Digite o nome da cidade");
        let quartosTotais = prompt("Digite a quantidade de quartos totais");
        let quartosDisponiveis = prompt("Digite a quantidade de quartos disponiveis");
        let provisory = { nome: nome, cidade: cidade, quartosTotais: quartosTotais, quartosDisponiveis: quartosDisponiveis };
        hoteis.push(provisory);
        console.log(hoteis);
        break;

    case 2:
        let cidadeNome = prompt("Digite o nome da cidade");
        for (const cidade of hoteis) {
            if (cidade.cidade === cidadeNome) {
                console.log(cidade);
            }
        }
        break;

    case 3:
        let hotelNome = prompt("Em qual hotel deseja fazer a reserva?");
        let nomeCliente = prompt("Qual seu nome?");
        hoteis.forEach(element => {
            if (element.nome === hotelNome && element.quartosDisponiveis > 0) {
                let reservinha = {id: contadorId, nome: nomeCliente, hotelReservado: element};
                reservas.push(reservinha);
                element.quartosDisponiveis--;
                contadorId++;
                console.log("Reserva Efetuada");
                console.log(reservinha);
            }else if(element.nome === hotelNome && element.quartosDisponiveis <=0){
                console.log("O hotel nao possui quartos disponiveis");
            }
        });
        break;

    case 4:
        let nomezinho = prompt("Qual seu nome?");
        let hotel = prompt("Em qual hotel deseja cancelar a reserva?");
        hoteis.forEach(element => {
            if (element.nome === hotel) {
                element.quartosDisponiveis++;
                for (const item of reservas) {
               reservas = reservas.filter(objeto => objeto.nome !== nomezinho);
                console.log("Reserva Cancelada");
                console.log(reservas);
            }
        }});
        break;

    case 5:
            console.log(reservas); 
        break;
    
    case 0: 
        console.log("Obrigado por usar nosso sistema!");
        sair = true;
        break;
    default:
        break;
}
}
