// ### HERANÇA ###

/* 
-> Conceito de pais e filhos
-> Objtos podem herdar, ou estender, características bases
-> Uma cópia de atributos e métodos de outra classe
-> Todos os objetos em JS já herdam do Prototype

*/

class Veiculo {
    rodas = 4;
    mover(direcao) { }
    virar(direcao) { }
}

class Moto extends Veiculo {
    constructor() {
        super() //para puxar atributos e métodos do elemento pai
        this.rodas = 2
    }
}
let motoca = new Moto()

console.log(motoca.rodas) //2