

class Person{

    name ='';
    lastName ='';
    age=0;
    food ='';

    constructor(name, lastName=' ',age){
        this.name =name;
        this.lastName = lastName;
        this.age =age;
        console.log(`${this.name + this.lastName + this.age}`)
    };

    set setFavoriteFood( food = '' ){
        this.food =food;
    }

    printInfo(){
        console.log(`hola soy ${this.name} y tengo ${this.age}\nestoy aprendiendo a programar`);
    }

 

}


const unObjeto = new Person('adri'," ",34);

// unObjeto.printInfo()

unObjeto.printInfo('bucear')

unObjeto.setFavoriteFood = 'chocolate'

console.log({unObjeto});

class Operario extends Person{
    cargo = '';

    constructor(name,lastName,age,cargo){
        super(name,lastName,age)
        this.cargo =cargo
        }

}

const raul =new Operario ('raul','culo',40,'smi guy')

console.log({raul})

raul.setFavoriteFood = 'kitesurf'

console.log({raul});