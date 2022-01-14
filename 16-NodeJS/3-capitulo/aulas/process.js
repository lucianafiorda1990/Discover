console.log(process.argv)

/* retorno no console:
    'C:\\Program Files\\nodejs\\node.exe', (referente ao node)
    'C:\\Projetos\\Discover\\16-NodeJS\\3-capitulo\\aulas\\process' (referente ao process)
*/

//console.log(`Seu nome é ${process.argv[2]} ${process.argv[3]}`)

// ou 

const firstName = process.argv[2]
const lastName = process.argv[3]
console.log(`Seu nome é ${firstName} ${lastName}`)