// ### ABSTRAÇÃO ###

/*
-> Template (máscara ou esqueleto) ou identidade de uma classe que será construída no futuro.

-> Atributos e métodos podem ser criados na classe de Abstração (superclasse), porém a implementação dos métodos e atributos, só poderão ser feitos na classe que irá herdar essa Abstração.

->>> Classe abstrata NÃO pode ser instanciada
*/

class Parafuso {
    constructor() {
        if (this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada')
    }

    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() {
        super()
    }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() {
        super()
    }

    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso { }

//riar e usar
// new Parafuso() // throw new Error('Classe abstrata não pode ser instânciada')     
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo) //fenda. philips
console.log(allen.tipo) // throw new Error('Método "get tipo()" precisa ser implementado')