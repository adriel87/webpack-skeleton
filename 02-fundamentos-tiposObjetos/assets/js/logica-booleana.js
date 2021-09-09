

const regresaTrue = ()=>{
    console.log('regresa true')
    return true
}

const regresaFalse = ()=>{
    console.log('regresa false')
    return false
}


console.warn(regresaTrue());

// el operador ! niega lo que este delante

console.log(!regresaFalse());


//operadores logicos && y

console.log(regresaTrue() && !regresaFalse())


//operador || or

console.log(regresaTrue() || regresaFalse());

//asignando con operaciones

const a1 = true && 'juanito';


//obtenemos el valor del ultimo elemento si toda la condicion es verdadera
console.log(a1);

const or1 = false || 'juanito' || 3;

//la variable obtiene el primer valor verdadero, String, number, object...
console.log(or1);



