const getFlagValue = require('./exports.js')


console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')} `)

// para executar no terminal, digitar:
// node process --name "Jean Raschini" --greeting "Tudo bem com voce?"