function getPrecioPorColor(color){
    if(typeof(color) != "string"){
        return null;
    }
    switch(color.toUpperCase()){
        case "AZUL":
            return 10;
        case "ROJO":
            return 15;
        case "AMARILLO":
            return 20;
        case "VERDE":
            return 14;
        default:
            return 9;
    }
}

["Azul", "Rojo", "Amarillo", "Verde", "Negro", 2].forEach(c => {
    console.log("El precio de la camiseta de color " + c + " es " +  getPrecioPorColor(c) + " €")
})

console.log("-----------------")
function getPrecioPorColor2(color){
    let precioPorColor = {
        "AZUL": 10,
        "ROJO": 15,
        "AMARILLO": 20,
        "VERDE": 14
    }
    if(typeof(color) != "string"){
        return null;
    } else if(precioPorColor.hasOwnProperty(color.toUpperCase())){
        return precioPorColor[color.toUpperCase()];
    } else{
        return 9;
    }
}

["Azul", "Rojo", "Amarillo", "Verde", "Negro", 2].forEach(c => {
    console.log("El precio de la camiseta de color " + c + " es " +  getPrecioPorColor2(c) + " €")
})