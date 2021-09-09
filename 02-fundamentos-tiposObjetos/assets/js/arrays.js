let juegos = ['dark souls','dark souls 2', 'dark souls 3', 'elden ring', 'blood borne', 'sekyro']

console.log('largo', juegos.length);

//primer elemento
let primero = juegos[0];

//ultimo 
let ultimo = juegos[juegos.length-1];

//mostrarlos

console.log({primero,ultimo})

//recorrer arreglos

//
juegos.forEach((j,index,array)=>{console.log(j, index, array)});


//añadir al principio y al final

//al final
let nuevaLongitu = juegos.push('project armored core');
console.log({nuevaLongitu})

//al principio

nuevaLongitu= juegos.unshift('otro juego');

console.log(nuevaLongitu)
// borrando datos del array

//el ultimo
let queSeBorro =juegos.pop()

console.log({queSeBorro});


//borrar varios elementos de un array

let pos =1;

let juegosBorrados = juegos.splice(pos,2)

console.log({juegosBorrados});
console.log({juegos});

//saber la aposiscion indice de un objeto

let gamePosition = juegos.indexOf('elden ring');


//! si regresara un -1 signifca que no encontro
console.log(gamePosition);




