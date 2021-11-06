// initialisation du tableau
let table = [];
let i = 0;

// boucle while qui remplit le tableau de true
while(i < 10) {
    table.push(true);
    i++;
}
console.log(table);


// on réinitialise i et table
i = 0;
table = [];
// boucle while qui remplit le tableau de false
while(i < 10) {
    table.push(false);
    i++;
}
console.log(table);


// on réinitialise i et table
i = 0;
table = [];
// boucle while qui remplit le tableau de true et false alternés
while(i < 10) {
    if(i % 2 === 0) {
        table.push(true);
    } else {
        table.push(false);
    }
    i++;
}
console.log(table);
