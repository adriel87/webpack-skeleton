//cosas interesantes

//preECMAscrip6
// function crearPersona (nombre,edad){
//     return{
//         nombre:`${nombre}`,
//         edad: `${edad}`
//     }
// }

//ECMAscrip6
function crearPersona (nombre,edad){
    return{
        nombre,
        edad
    }
}

console.log(crearPersona('adriel',34));

const crearPersonaFlecha = (nombre,edad) => ({nombre,edad})

console.log(crearPersonaFlecha('adriel',34));


//trabajando con los argumentos que podrian venir en una funcion tradicional
function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(1,2,3,'hola')

//ahora veamos como hacerlo con una funcion flecha

//usando el operador resto
const imprimerArgumento2 = (...args) =>{
    console.log(args)
    return args;
}

imprimerArgumento2(1,2,3,'hola')

//desectructurando un array

const [vivo,sucio,edad,nombre] = imprimerArgumento2(true,false,33,'adriel');

console.log({vivo,sucio,edad,nombre})

//desectructura un objeto

const nuevaPersona = crearPersona('adriel',56);

let {edad: miEdad} = nuevaPersona;

console.log(miEdad)

//desectructuraArgumento


const link = {

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


// const imprimePropiedades = (personaje) =>{

//     console.log(personaje.nombre)

//     //lo mismo con el el resto de argumentos

// }

const imprimePropiedades = ({nombre,edad,codeNmae,vivo,oscuro =false}) =>{

    console.log({nombre});
    console.log({edad});
    console.log({codeNmae});
    console.log({vivo});
    console.log({oscuro});

}

imprimePropiedades(link)


