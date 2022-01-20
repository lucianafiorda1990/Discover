// ### POLIMORFISMO ###

/* 
-> Significa muitas formas

-> Quando um objeto estende de outro (herança), alvez haja a necessidade de reescrever uma ou mais características (atributos e métodos) nesse novo objeto.
*/

class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = 'infantil'
        } else if (this.peso <= 65) {
            this.categoria = 'juvenil'
        } else {
            this.categoria = 'adulto'
        }
        return this.categoria
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso)
    }

    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = 'pluma'
        } else if (this.peso <= 60) {
            this.categoria = 'leve'
        } else if (this.peso <= 75) {
            this.categoria = 'meio-leve'
        } else {
            this.categoria = 'pesado'
        }
        return this.categoria
    }
}

let aldo = new Lutador(80)
console.log(aldo.definirCategoria())