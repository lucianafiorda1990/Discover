// ### HIGHER-ORDER FUNCTION ###

/*
-> Funções que recebem outras funções como parâmetros
-> Funções que poderão retornar outras funções
*/

const numbers = [2, 4, 8, 16]
const square = n => n * n
const squaredNumbers = numbers.map(square)
console.log(squaredNumbers) //[ 4, 16, 64, 256 ]

