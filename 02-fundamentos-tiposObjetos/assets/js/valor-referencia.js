

let a = 10;
let b = a;
a=30;

console.log({a,b})

let juan = {
    nombre: 'juan'
}
let ana ={...juan};

//usar el operador ... dentro de un objeto separa los elementos y
//  rompe la referencia con el objeto que se toma para hacer la igualda,
//  creando una nueva refenrencia para la nueva variable

//? el operador se llama spread ...


ana.nombre='ana'
//aqui podemos ver que como se apunta a la misma referencia se cambia el valor de nombre en ambas variables
console.log({juan,ana})

const cambiaNombre = ({...persona}) =>{
persona.nombre='adri'
return persona
}

let peter = { nombre : 'peter'}

let adri = cambiaNombre(peter);

console.log({peter,adri})


//con arreglos

const frutas =['manzana','peras','pinas','uva'];

const otrasFrutas = [...frutas];

otrasFrutas.push('naranaja')
console.log(otrasFrutas);
console.log(frutas)

console.table({frutas,otrasFrutas})