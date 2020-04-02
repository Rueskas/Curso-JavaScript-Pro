var cadVar = "Salu2 desde global con var";
let cadLet = "Salu2 desde global con let";
const CAD_CONSTANTE = "Salu2 desde una constante global";

{
    console.log("Scope local");
    var cadVarLoc = "Salu2 desde local con var";
    let cadLetLoc = "Salu2 desde local con let";
    const CAD_CONSTANTE_LOC = "Salu2 desde una constante local";
    console.log(cadVar);
    console.log(cadLet);
    console.log(cadVarLoc);
    console.log(cadLetLoc);
    console.log(CAD_CONSTANTE);
    console.log(CAD_CONSTANTE_LOC);
}

console.log("Scope global");    
console.log(cadVar);
console.log(cadLet);
console.log(cadVarLoc);
// console.log(cadLetLoc); No es accesible
console.log(CAD_CONSTANTE);
// console.log(CAD_CONSTANTE_LOC); No es accesible

let a, b, rest;
[a, b] = [10, 30];
console.log(a + " " + b);
[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(a + " " + b + " [" + rest + "]");