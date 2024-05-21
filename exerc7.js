const prompt = require('prompt-sync')();

function valueCars(car,km) {
    if(car === 'popular'){
        if(km <= 100){
            return 90.00 + (km * 0,20);
        }else{
            return 90.00 + (km * 0,10);
        }
    }else{
        if(km <= 200){
            return 150.00 + (km * 0,30);
        }else{
            return 150.00 + (km * 0,25);
        }
    }
}

let carType = parseInt(prompt('Qual o tipo de carro alugado? digite 1 para carro popular e 2 para carro de luxo'));
let kilometers = parseInt(prompt('Quantos KM foram percorridos?'));

switch (carType) {
    case 1:
        console.log(`total a pagar pelo aluguel do carro popular: R$` + valueCars('popular', kilometers));
        break;
    case 2:
        console.log(`total a pagar pelo aluguel do carro popular: R$` + valueCars('luxo', kilometers));
        break;
    default:
        console.log("opção invalida!")
        break;
}
