// ### COMPOSIÇÃO DE FUNÇÕES ###

/*
-> Um encadeamento de funções
-> Ou seja, uma função que retorna um dado e vai para outra função, que retorna outro dado e vai pra outra função, etc...
*/

const people = ['Rod', 'Diego', 'Rafael', 'Dani']
const upperCasePeopleThatStartsWithD = people
    .filter(person => person.startsWith('D'))
    .map(dperson => dperson.toUpperCase())

console.log(upperCasePeopleThatStartsWithD) //[ 'DIEGO', 'DANI' ]