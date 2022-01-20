// ### FUNÇÕES PURAS ###

/*
-> Não deverá depender de nenhum dado externo a não ser o que foi oassado como argumento
-> Não deverá sofrer nenhuma interferência do mundo externo aq ela
-> Se o argumento é o mesmo, o retorno não poderá ser diferente quando a função for chamada novamente
-> Não terá nenhum efeito colateral no seu código
    - Não irá modificar nenhum dado
    - Não irá guardar nenhum estado
*/

//Exemplo 1: função impura -> está dependendo de dado externo (Math) que não foi passado por parâmetro
function calculateCircumference(radius) {
    return Math.PI * (radius + radius)
}

//Exemplo 2: função impura -> está alterando um dado externo
let person = {
    name: 'Luciana Fiorda',
    age: 'jovem'
}
function changeName(name) {
    this.person = name
}

//Exemplo 3: função pura
const calculateCircumference = function (pi, radius) {
    return pi * (radius + radius)
}

//Exemplo 4: função pura com arrow function
const calculateCircumference = (pi, radius) => pi * (radius + radius)

