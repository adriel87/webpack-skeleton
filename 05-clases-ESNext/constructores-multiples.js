class Rapida {

static porObjeto({nombre, apellido, pais}){

    return new Rapida(nombre,apellido,pais)
}

    constructor(nombre, apellido, pais){
        this.nombre =nombre;
        this.apellido = apellido;
        this.pais = pais;

    }

    getIngo(){
        console.log(`info: ${this.nombre} ${this.apellido} ${this.pais}`);
    }
}


const   nombre1 ='idara',
        apellido1 = 'quintana',
        pais1='espania';

const persona = new Rapida(nombre1,apellido1,pais1)

const persona2 = { 

    nombre:'adri',
    apellido:'arocha',
    pais:'mexico'

}

const laOtraPersona = Rapida.porObjeto(persona2);

console.log({laOtraPersona});

