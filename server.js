'use strict'

const http = require('http') 			// var que no cambia de valor
const port = process.env.PORT || 8080   // accediendo a variable de entorno

const server = http.createServer() 		// creando servidor

server.listen(port) // puerto 