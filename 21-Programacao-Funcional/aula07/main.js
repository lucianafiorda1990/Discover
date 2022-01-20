// ### PROGRAMAÇÃO IMPERATIVA VS. DECLARATIVA   

//função que eleva o número ao quadrado

//IMPERATIVA -> significa: faça da seguinte forma

/*
* O código é pensado e gerado em sequência
* O código é pensado como um passo a passo, como uma receita de bolo
* Uma coisa depende da outra
* O estado de um dado é alterado constantemente causando mutações nas variáveis
* Orientação a objetos é um tipo de paradigma imperativo
*/

let number = 6

function square() {
    return number * number
}

number = square()
console.log(number) //36

//DECLARATIVA -> significa: o que fazer e não como fazer

/*
* O código é gerado para fazer algo, não importa como
* O que fazer e não como fazer
* Não há necessidade de um passo a passo no código
* Programação funcional é um tipo de paradigma declarativo
*/

const square = n => n * n
console.log(square(5)) //25