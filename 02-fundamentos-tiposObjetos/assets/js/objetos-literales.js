const personaje = {

    nombre : 'link',
    codeNmae: 'heroe de la trifuerza',
    edad: 18,
    vivo:true,
    coords:{
        lat:300,
        long: 30
    },
    trajes:['rojo','azul','verde'],
    direccion:{
        zip: '35000',
        ubicacion:'hyrule'
    }
}


//formas de acceder a las propiedades de un objeto
console.log('nombre', personaje.nombre);

console.log('nombre', personaje['nombre']);

console.log('edad', personaje.edad);

console.log('lat', personaje.coords.lat);

console.log('lon', personaje.coords.long);

console.log(`numero de trajes de ${personaje.nombre} es de`, personaje.trajes.length);

console.log('el ultimo traje es', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';

console.log('vivo?', personaje[x]);

// mas detalles sobre los objetos


personaje.edad =null;

console.log(personaje)

//para borrar una propiedad tenemos que usar la palabra reservada delete

delete personaje.edad;

//añadir propiedades a un objeto

personaje.casado = false;

console.log(personaje);

//comm trabajar con el objeto como si fuera un array

const entriesPares = Object.entries( personaje );

console.log(entriesPares);

console.log(entriesPares[0]);

//convertir en inmutable un objeto 

Object.freeze(personaje);

//no podemos añadir nuevas propiedades ni modificarlas
personaje.colres = "varde";
personaje.casado =true


console.log(personaje);

//?sin embargo si se puede modificar los objetos o propiedades dentro del mismo objeto


//obtener las propiedades de un objeto

const propiedades = Object.getOwnPropertyNames(personaje);

console.log(propiedades);

//obtener solo los valores de un objeto

const values = Object.values(personaje);

console.log(values)

