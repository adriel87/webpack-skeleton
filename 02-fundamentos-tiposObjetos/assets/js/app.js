//vamos a ver los tipos d edatos primitivos
let nombre = 'peter Parker'

console.log(nombre);



// no se puede volver a inicializar la variable con let
//! let nombre = 'ben Parker'

//! console.log(nombre)

//? asignar nuevos valores

nombre = 'tia may'


//? comprobar tipo de valor
console.log( typeof nombre);//string

let esMarvel =false;

console.log(typeof esMarvel);//boolean


let edad = 33;
console.log(typeof edad);//number


let superPoder;

console.log(typeof superPoder);//undefined

let nulli =null;

console.log(nulli);//pues es null, esperaba object

let symbol = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof symbol)//symbol
console.log(symbol)

console.log(symbol===symbol2);





//palabras reservadas y nomreb de variables






//array


let videojuegos =['mario', 'megaman', 'zelda'];

console.log({videojuegos})

console.log(videojuegos[0])

for (let i = 0; i < videojuegos.length; i++) {
    const element = videojuegos[i];
    console.log({element});
}

//? en JS podemos llenar el array con difrenretes tipos de datos

let cosas = [
    true,   //boolean
    false,  //boolean
    3,      //number
    4+3,    //number
    function(){}, //funcion
    ()=>{}, //funcion
    {a:'hola'}, //objeto literal
    ['x','megaman','zero','doctor liht'], //array
]

console.log(cosas[cosas.length-1][3]);


//mas sobre array




//objetos

//mas sobre los objetos

//funciones y funciones flecha

//retorno de funciones