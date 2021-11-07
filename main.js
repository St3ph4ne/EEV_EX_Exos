// Déclaration des tableaux
let suite = [];
let nombresPairs = [];
let nombresImpairs = [];
let multiplesDeCinq = [];
let multiplesDeTrois = [];


// Définition de la fonction fibonacci()
/**
 * retourne dans un tableau les 'arg' premières valeurs de la suite de Fibonacci
 * @param {number} arg nombre d'entiers de la suite
 * @returns un tableau avec les entiers
 */
 function fibonacci(arg) {

    let table = [];

    // si arg=0 on sort de la fonction en renvoyant le tableau vide
    if(arg === 0) return table;

    // on ajoute au tableau la 1ère valeur de la suite
    table.push(0);

    // si arg=1 on sort de la fonction en renvoyant le tableau avec la 1ère valeur
    if(arg === 1) return table;

    // on ajoute au tableau la 2ème valeur de la suite
    table.push(1);

    // si arg=2 on sort de la fonction en renvoyant le tableau avec les 2 premières valeurs
    if(arg === 2) return table;

    // pour arg>=2 on ajoute au tableau les valeurs suivantes de la suite
    // jusqu'à avoir 'arg' valeurs dans le tableau
    for(i = 2; i < arg; i++) {
        newValue = table[i-1] + table[i-2];
        table.push(newValue);
    }

    // quand on a 'arg' valeurs dans le tableau, on renvoit le tableau
    return table;
            
}

// on exécute la fonction avec l'argument 1000
// pour remplir le tableau 'suite'
// avec les 1000 premières valeurs de la suite de Fibonacci
suite = fibonacci(1000);



// pour parcourir tout le tableau 'suite'
for(i = 0; i < suite.length; i++) {

    // si la valeur est paire
    // on l'ajoute au tableau correspondant
    if(suite[i] % 2 === 0) {
        nombresPairs.push(suite[i]);
    } else {
        nombresImpairs.push(suite[i]); // sinon on l'ajoute au tableau nombresImpairs
    }

    // si la valeur est un multiple de 5
    // on l'ajoute au tableau correspondant
    if(suite[i] % 5 === 0) {
        multiplesDeCinq.push(suite[i]);
    }

    // si la valeur est un multiple de 3
    // on l'ajoute au tableau correspondant
    if(suite[i] % 3 === 0) {
        multiplesDeTrois.push(suite[i]);
    }
}



console.log("Le tableau nombresPairs contient " + nombresPairs.length + " valeurs.")
console.log("Ces valeurs sont :" + nombresPairs);
console.log("------------------------------------------");

console.log("Le tableau nombresImpairs contient " + nombresImpairs.length + " valeurs.")
console.log("Ces valeurs sont :" + nombresImpairs);
console.log("------------------------------------------");

console.log("Le tableau multiplesDeCinq contient " + multiplesDeCinq.length + " valeurs.")
console.log("Ces valeurs sont :" + multiplesDeCinq);
console.log("------------------------------------------");

console.log("Le tableau multiplesDeTrois contient " + multiplesDeTrois.length + " valeurs.")
console.log("Ces valeurs sont :" + multiplesDeTrois);
console.log("--------------------------------");
