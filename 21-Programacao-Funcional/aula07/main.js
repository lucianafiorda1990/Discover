// ### PROGRAMAÇÃO IMPERATIVA VS. DECLARATIVA   

//função que eleva o número ao quadrado

//IMPERATIVA -> significa: faça da seguinte forma

let number = 6

function square() {
    return number * number
}

number = square()
console.log(number) //36

//DECLARATIVA -> significa: o que fazer e não como fazer

const square = n => n * n
console.log(square(5)) //25