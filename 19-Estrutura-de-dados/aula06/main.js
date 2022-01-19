// ### ARRAYS ###

const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

//index começa pelo 0
console.log(pilotos[0]) //Senna
console.log(pilotos[3]) //Hamilton

//acessar o tamanho do array
console.log(pilotos.length) //4

//iterável
for (let piloto of pilotos) {
    console.log(piloto)
}
/*
    Senna
    Prost
    Schumacher
    Hamilton
*/

// adicionar elemento
pilotos.push('Alonso')
console.log(pilotos)

//encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)
//Senna

//deletar um elemento
pilotos.splice(1, 1)
console.log(pilotos)