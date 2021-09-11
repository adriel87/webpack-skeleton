
//pprodiedade privadas en JS
//usar el hastag o la almohadilla delante la de la variable

class Rectangulo {
    #area = 0;

    constructor(bse =0 , alt =0){
        this.base = bse ;
        this.altura = alt;
        this.#area = this.base * this.altura
    }
}

const colega = new Rectangulo(20,20);

console.log({colega})



console.log({colega});
