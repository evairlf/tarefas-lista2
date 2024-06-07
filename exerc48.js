const lojaA = { sabonete: 3, escova: 10, papel: 30, sandalia: 4, lapiseira: 3 };
const lojaB = { sabonete: 3, toalha: 10, cadarco: 12, xuxa: 666, lapiseira: 3 };

function mergeObjects(lojaA, lojaB) {
    const merged = { ...lojaA };

    for (const key in lojaB) {
        if (merged.hasOwnProperty(key)) {
            merged[key] += lojaB[key];
        } else {
            merged[key] = lojaB[key];
        }
    }

    return merged;
}

const merged = mergeObjects(lojaA, lojaB);
console.log(merged);
