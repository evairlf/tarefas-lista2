const atributos = {
    forca: 10,
    molejo: 21,
    sagacidade: 10,
    sexApeal: 0,
    inteligencia: 3
}

function newObj(array) {
    let objetos = {};

for (const key in array) {
    objetos[key] = Math.floor(Math.random()*12);
}

return objetos;

}

console.log('Antes:');
console.log(atributos);
console.log('Depois:');
console.log(newObj(atributos));