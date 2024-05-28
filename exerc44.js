const obejeto = {nome: "Fucao preto",marca:"volquisvagen", precedencia: "Do meu tio", ano: 1983, valor: Number.MAX_SAFE_INTEGER};

function isString(obj) {
    let count = 0;
    for (const key in obj) {
        if (typeof obj[key] === "string") {
            count++;
        }
    }
    console.log(count);
}

isString(obejeto);