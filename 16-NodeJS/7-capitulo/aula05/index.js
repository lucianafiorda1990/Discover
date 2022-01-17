const { EventEmitter } = require('events')
const ev = new EventEmitter()

//once para ouvir eventos apenas uma vez
ev.once('saySomething', (message) => {
    console.log('eu ouvi você', message)
})

ev.emit('saySomething', "Luciana")
ev.emit('saySomething', "Joao") //nao irá executar
ev.emit('saySomething', "Maria") //nao irá executar
