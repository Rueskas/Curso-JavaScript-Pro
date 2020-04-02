let vehiculo = {
    encendido: false,
    velocidad: 0,
    encender() {
        this.encendido = true;
        this.velocidad = 0;
    },
    apagar() {
        this.encendido = false;
        this.velocidad = 0;
    },
    acelerar(){
        this.velocidad++;
    },
    acelerar(velocidad){
        this.velocidad += velocidad;
    },
    frenar(){
        this.velocidad--;
    },
    frenar(velocidad){
        this.velocidad -= velocidad;
    }
};

let coche = {
    puertas: 5,
    __proto__: vehiculo
};

let patin = {
    manillar: 1,
    __proto__:vehiculo
};

console.log(coche);
console.log(patin);

coche.encender();
coche.acelerar();
console.log(coche);
coche.acelerar(100);
console.log(coche);