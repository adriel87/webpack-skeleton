//vamos a ver la estructura de control if else

let a = 10;

if (a >= 10) {
    console.log('es mayor o igual de 10')
}else{
    console.log('es menor de 10')
}

const hoy = new Date();

let dia = hoy.getDay();


if(dia === 0){
    console.log('es domingo')
}else{
    console.log('no es domingo', dia)
};


console.log('fin programa');
//? valores iguales ==
//? valores estrictamente iguales === , esto comprueba el valor y el tipo de dato
//ejercicio
const diaSemana =['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

console.log(diaSemana[dia]);

const diasSemanaObjeto={
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado'
};

console.log('dia de la semana', diasSemanaObjeto[dia])

