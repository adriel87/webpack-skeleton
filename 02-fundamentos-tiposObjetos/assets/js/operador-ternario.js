//trabajadno con el operadoore ternario


const diaActual = new Date().getDay();
const horaActual = new Date().getTime();
console.log({diaActual,horaActual})

const tipoDia =([0,6].includes(diaActual))?'fin de semana':'entre semana';

console.log(tipoDia);


//protips para los operadores ternarios

const elMayor = (a,b) => (a>b) ? a : b;

const tieneMembresioa = (miembro)=> (miembro)?'2 pavos':'5 pavos';


