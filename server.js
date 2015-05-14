'use strict'

const http = require('http') 			
const port = process.env.PORT || 8080  

/*
	Server aparte de recibir un callback, tambien es un event emmiter, osea yo puedo ver el servidor como una instancia
	de event emmiter
*/

const server = http.createServer()

// cada vez que se ejecuta el evento request, se ejecuta la funcion onRequest
server.on('request', onRequest)
// cada vez que se ejecuta el evento listening, se ejecuta la funcion onListening
server.on('listening', onListening)

server.listen(port)

function onRequest (req, res) {
	res.end("Hola io.js")
}

function onListening () {
	console.log('Servidor escuchando en el puesto: ' + port)
}