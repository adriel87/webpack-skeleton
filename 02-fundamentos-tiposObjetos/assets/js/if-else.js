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
}


console.log('fin programa')
//? valores iguales ==
//? valores estrictamente iguales === , esto comprueba el valor y el tipo de dato