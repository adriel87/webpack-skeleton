// fundamenteos de el lenguaje de programacion JavaScript

// hola mundo desde la terminal

console.log('hola mundo');

// introduccion a variables


//forma tipica de crear un variable
let a = 10;

//constante
const b =10;

// variable tipo var == en desuso por...

var c = 'hola ';

//formas de definir variables

// aqui se inicializan e y f con valores, f,d y g son nullos
let e ='spyderman',
    f, d, g,
    h= e + 3;


//console logs, mensajes en consola para comprobar diferentes cosas

console.warn('warning');
console.error('error');
console.info('info');

// como mostrar informacion con la consola
//mediante varios parametros
//           string    number
console.log('a vale' , a);

//otra forma de imprimir para ver toda la informacion de la variabel es 

//imprimios el objeto
console.log({a});

//imprimir un array

console.table({a,b,c,e,d,h})

//concatenado string
const saludo = c + e;

console.log(saludo);
