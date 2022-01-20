// ### STATELESS ###

/*
-> Não guarda estado
-> A função so conhece dados entregues a ela
-> A resposta não poderá variar
*/

//exemplo de Stateless function
// const square = n => n * n

//exemplo de Statefull function
let number = 2
function square() {
    return number * number
}

console.log(number = square()) //4
