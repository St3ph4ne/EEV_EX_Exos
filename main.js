
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

// affiche le tableau des 100 premières valeurs de la suite de Fibonacci
console.log(fibonacci(100));

