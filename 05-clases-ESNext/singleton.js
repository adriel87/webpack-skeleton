
class Singleton {

    static instance;

    name = '';
    
    constructor(name = ''){

        if (!!Singleton.instance) {
            return Singleton.instance
        }


        Singleton.instance=this;
        this.name = name;

    }


}

const instancia1 = new Singleton('idaira');

console.log(instancia1)

const instancia2 = new Singleton('adriel');

console.log(instancia2);




