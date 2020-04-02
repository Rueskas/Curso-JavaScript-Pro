function mapa(x, y, z) {
    console.log(x, y, z);
}

mapa(3, 5, 10);

function mapa2(obj) {
    let str = "";
    for (let key in obj) {
        str += obj[key] + " ";
    }
    console.log(str.trim());
}

mapa2({ x: 3, y: 5, z: 10 });
mapa2({ x: 3, y: 5, z: 10, t: 20 });

function calculadora(num1, num2, op) {

    function suma() {
        return num1 + num2;
    }
    function resta() {
        return num1 - num2;
    }
    if (op == "+") {
        return suma();
    }
    else if (op == "-") {
        return resta();
    } else {
        return null;
    }
}

console.log("2 + 3 = " + calculadora(2, 3, "+"));
console.log("2 - 3 = " + calculadora(2, 3, "-"));

let multiplicadoPorTres = [1, 2, 3].map(n => {
    return n * 3;
});
console.log(multiplicadoPorTres);

let numeros = [10, 30, 50, 60].filter(n => n >= 50);
console.log(numeros);

let saludar = (name) => {
    console.log(name);
}

saludar("Pedro");

let descuentos = {
    novato: 0.4,
    pro: 0.2
}

var descontar = function (tipoCliente, tarifa) {
    return this[tipoCliente] * tarifa;
}

console.log(descontar.call(descuentos, "novato", 100));
console.log(descontar.apply(descuentos, ["pro", 100]));


console.log(descontar("novato", 100)); //NaN porque this es window
let descontarBinded = descontar.bind(descuentos);
console.log(descontarBinded("novato", 100));

var app = (
    function hola() {
        var mensaje = "Hola mundo";
        return {
            mensaje: mensaje
        }
    })();
console.log(app);