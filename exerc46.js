const prompt = require('prompt-sync')();

let vendor = [
{ nome: "Jaques", venda: 2000 },
{ nome: "Edu", venda: 300 },
{ nome: "Edu", venda: 342 },
{ nome: "Jaques", venda: 300 },
{ nome: "Jubiscleison", venda: 720 }
];

function sumarize(array) {
    const total_vendas = array.reduce((sum, sale) => {
        const { nome, venda } = sale;
        
        if(sum[nome]){
            sum[nome] += venda;
        }else{
            sum[nome] = venda;
        }

        return sum;
    },{});

    return total_vendas;
}


console.log(sumarize(vendor));