let flag = true;
let counter = 0;


// si flag vaut false incrémente la variable counter
if(!flag) counter++;


// si flag vaut false décrémente la variable counter
if(flag) counter--;


// on inverse la valeur de la variable booléenne flag
flag = !flag;
// maintenant flag vaut donc false

// si flag vaut true incrémente la variable counter
if(flag) counter++;


// si flag vaut false décrémente la variable counter
if(!flag) counter--;

// initialement flag vaut true, donc
// la condition ligne 6 n'est pas validée
// la condition ligne 10 est validée, --> counter=-1
// ligne 14 on inverse la valeur de flag --> flag=false
// la condition ligne 18 n'est pas validée
// la condition ligne 22 est validée --> counter=-1-1=-2