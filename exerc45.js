const cars = ["fusca", "chevette", "fusca", "chevete","fusca", "chevette", "fusca", "chevete","fusca", "chevette", "fusca", "chevete","Opala", "Maverik"];

function contarStrings(arrayDeStrings) {
    const contador = {};
    arrayDeStrings.forEach(string => {
        if (contador[string]) {
            contador[string]++;
        } else { 
            contador[string] = 1;
        }
    });

    return contador;
}

const resultado = contarStrings(cars);
console.log(resultado);
