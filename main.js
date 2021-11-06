// initialisation de la variable
let counter = 243;

for(let i = counter; i >= 0; i--) {

    // afficher si la valeur est paire
    if(i % 2 === 0) {
        console.log("La valeur " + i + " est paire.");
    }

    // afficher si la valeur est multiple de 5
    if(i % 5 === 0) {
        console.log("La valeur " + i + " est un multiple de 5.");
    }

    // afficher si la valeur est un multiple de 10
    if(i % 10 === 0) {
        console.log("La valeur " + i + " est un multiple de 10.");
    }

}