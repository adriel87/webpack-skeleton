//creando funciones

//forma tradicional


function saludar() {
    console.log('hola')
}

saludar();

//definiral dentro de una variable , lo mas usual const

const saludar2 = function(){
    console.log('hola desde la funcion anonima')
}
saludar2()


//agregando argumentos

function saludarConNombre(nombre =''){
    console.log(`hola ${nombre}`)
}

saludarConNombre('senior')

//las fuinciones tradicionales tiene un metodo implicito que le le permite utilizar  todos los parametros que se le pasan

function traditional(nombre){
    console.log(arguments);
    console.log(nombre);
}

traditional('adriel',3,'adios');


//funciones de flecha

const saludarFlecha = ()=>{
    console.log('hola desde flecha');
};


saludarFlecha();


//retorno de las funciones
//todas las funciones devuelven algo
//! si no esta definido devolvera undefined

//establecemos el retorno de la funcion con la palbra reservada return
//el return termina la ejecucion de la funcion

const devuelveUnObjetoliteral = ()=>{
    console.log('te mando el objeto');
    return {
        nombre:'adriel',
        edad:34
    }
}

const objeto =devuelveUnObjetoliteral()
console.log(objeto);


//si solo vamos a hacer una instruccion

const queWaymiFuncion = (a,b) => a+b  //nos devuelve la suma de a y b

//ejercicio de transformar una funcion tradicional a una funcion flecha de una sola linea

//?funcion a transformar
function getAleatorio(){
    return Math.random()
}

//?funcion transformada
const getAleatorio2 = () => Math.random();

