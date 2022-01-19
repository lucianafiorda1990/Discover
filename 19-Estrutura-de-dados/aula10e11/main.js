// ### QUEUE ###

/*
Queue = fila
-> linear, um atras do outro
-> o primeiro a entrar na fila, é o primeiro a sair
-> FIFO - "First In, First Out"
-> Enqueue = entrando na fila
-> Dequeue = saindo da fila
*/

//enqueue() -> adiciona um elemento ao final da fila
//dequeue() -> remove o primeiro elemento a entrar na fila
//size() -> para mostrar o tamanho da fila
//front() -> para pegar o primeiro elemento da fila

//Passo 1 - Modelagem
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`)
    }

    dequeue() {
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}


//Passo 2 - Utilização
const fila = new Queue()

//adicionando dados
fila.enqueue('Mariana')
fila.enqueue('Jorge')
fila.enqueue('Paola')

//removendo dados
fila.dequeue()
fila.dequeue()
fila.dequeue()