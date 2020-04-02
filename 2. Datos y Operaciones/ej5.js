let o = {

}
Object.defineProperty(o, 'a', {
    value: 37,
    writable: false,
    enumerable: true,
    configurable: true
});

Object.defineProperty(o, 'b', {
    get: () => {return b},
    set: (b) =>{this.b = b}
});

// console.log(o.b); B is not defined

o.b = 30;
o.a = 10;
console.log(o);

function Persona(name, surname){
    this.name = name;
    this.surname = surname;
    this.sayName = _ => {
        return name;
    }
}

let persona = new Persona("Sergio", "Rueskas");
console.log(persona);
console.log(persona.sayName());
