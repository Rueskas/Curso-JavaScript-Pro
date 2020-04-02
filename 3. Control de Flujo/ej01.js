if(!false){
    console.log("false igual a false")
}

if(!undefined){
    console.log("false igual a undefined")
}

if(!null){
    console.log("false igual a null")
}

if(!0){
    console.log("false igual a 0")
}

if(!""){
    console.log("false igual a \'\'")
}

if(!Number.NaN){
    console.log("false igual a NaN")
}

function mayorQueCien(number){
    return number > 100? true: false;
}

console.log("20 es mayor que 100? " + mayorQueCien(20));
console.log("120 es mayor que 100? " + mayorQueCien(120));