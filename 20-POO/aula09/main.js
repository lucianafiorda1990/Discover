// ### ENCAPSULAMENTO ###

/*

-> Colocar numa cápsula
-> Agrupamento de funções e variáveis
-> Esconder detalhes de implementação
-> Camada de segurança para os atributos e métodos

* As Classes encapsulam as funções e variáveis

ex: dirigir um carro vs. saber como funciona o motor

*/

class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    #calcularArea() {
        return this.altura * this.largura
    }
}

//Criando uma instância
let poligono = new Poligono(50, 60)
console.log(poligono.area)