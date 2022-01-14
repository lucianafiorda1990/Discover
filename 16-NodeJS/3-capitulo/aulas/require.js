//importando de um módulo já existente
// const path = require('path')
// console.log(`Basename do __filaname: `, path.basename("__filename)"))
// console.log(`Basename de um arquivo do pc: `, path.basename("C:/Projetos/Discover/16-NodeJS/3-capitulo/aula02"))

//importando de um módulo próprio
const myModule = require('./exports.js')

//se for executar o modulo que contem função -> console.log(myModule())

//executando mudulo normal
console.log(myModule)
