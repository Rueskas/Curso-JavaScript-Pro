var list = [1,2,3,4,5,6];

/*
for(let i = 0 ; i < list.length;i++){
    console.log(list[i]);
}

list.forEach(n => console.log(n));

for(let it of list){
    console.log(it);
}

for(let it in list){
    console.log(it);
}
*/

let listMultiplicada = list.map(n => n*2);
console.log(listMultiplicada);

let listaDePares = list.filter(n => n%2 == 0);
console.log(listaDePares);