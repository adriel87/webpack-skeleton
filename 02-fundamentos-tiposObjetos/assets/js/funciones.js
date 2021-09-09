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