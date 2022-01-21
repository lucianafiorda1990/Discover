// ### FIRST-CLASS FUNCTION ###

/* 
-> Podem estar em qualquer lugar, inclusive como parâmetro de outras funções
-> A função pode ser entendida como uma variável
*/

const sayMyName = () => console.log('Luciana')
const runFunction = fn => fn()

runFunction(sayMyName) //Luciana
runFunction(() => console.log('Discover')) //Discover
console.log(runFunction(Math.random)) //0.5685486654432832