// initialisation de la variable
let counter = 243;

// De i=243 jusqu'à i=0 (-1 à chaque passage de boucle)
for(i = counter; i >= 0; i--) {

    // si i est un multiple de 10
    if(i % 10 === 0) {
        let result = i * 2 + 1; // i + (i + 1)
        console.log(i + " est un multiple de 10. " + "Résultat = " + result);
    }

    // si i est pair
    if(i % 2 === 0) {
        let result = i * 2 - 2; // i + (i - 2)
        console.log(i + " est pair. " + "Résultat = " + result);
    }

    // si i est un multiple de 5 et de 3
    if(i % 5 === 0 && i % 3 === 0) {
        console.log("vrai");
    }

}