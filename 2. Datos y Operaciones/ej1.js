let cadena = "Hola";

console.log(typeof(cadena));

let cadena2 = new String("Hola");

console.log(typeof(cadena2));

if(cadena == cadena2){
    console.log("Son iguales")
} else{
    console.log("Son diferentes");
}

if(cadena === cadena2){
    console.log("Son iguales y del mismo tipo")
} else {
    console.log("Son de diferente tipo");
}

let num = 32.32;
console.log(num);
num += 3;
console.log(num);

console.log("To exponential: " + num.toExponential());
console.log("To fixed: " + num.toFixed());
console.log("To precision: " + num.toPrecision());

let cad = "Hola";
let cadCopy = cad;
cad = "HOLA";
console.log(cad + " " + cadCopy);

let numeros = [1,2,3,4,5,6];
let numerosCopy = numeros;
numeros[0] = 7;
console.log (numeros + " - " + numerosCopy);
numerosCopy = numeros.slice();
numeros[0] = 1;
console.log (numeros + " - " + numerosCopy);

let obj = {
    "test": 2,
    "final": 4
}

let objCopy = obj;
obj.test = 4;
console.log(obj.test + " - " + objCopy.test);