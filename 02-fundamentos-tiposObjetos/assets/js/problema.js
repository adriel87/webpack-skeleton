
class Persona {
    constructor(nombre,edad){
        this.nombre =nombre;
        this.edad   =edad
    }
    imprimir(){
        console.log(`el nombre es ${this.nombre} y la edad es ${this.edad}`)
    }
}

const adri = new Persona('adriel',34);

adri.imprimir();