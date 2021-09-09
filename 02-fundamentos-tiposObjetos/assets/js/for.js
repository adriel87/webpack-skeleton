const heroes = ['batmas','superman','wonderwoman','aquaman']

//recorrer array

//forma tradiucional
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);    
}


//usando el metodo foreach del objeto array
heroes.forEach(element => {
    console.log(element)
});


//usando el for in
for (const i in heroes){
    console.log(heroes[i]);
} 

//usando el for of
for (const heroe of heroes) {
    console.log(heroe)
}

