'use strict'

const http = require('http') 			
const router = require('./router') // el router es el index.js de la carpeta router


const server = http.createServer()
const port = process.env.PORT || 8080  

// cada vez que se ejecuta el evento request, se ejecuta el router
server.on('request', router)
// cada vez que se ejecuta el evento listening, se ejecuta la funcion onListening
server.on('listening', onListening)

server.listen(port)

function onListening () {
	console.log(`Servidor escuchando en el puesto: ${port}`)
}