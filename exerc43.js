obj1 = { 
    carro : "Fusquinha vuador ihul",
    cor: "Olha o douradooo"
}

obj2 = { 
    musica: "Que bateu no espinhel",
    ano: "Mil novecentos e la vai bolinha"
}

function ajunta(object1,object2) {
    const objeto = {...object1,...object2};
    return objeto;
}

console.log(ajunta(obj1,obj2));