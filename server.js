'use strict'

const http = require('http') 			// var que no cambia de valor
const port = process.env.PORT || 8080   // accediendo a variable de entorno

/* 
	creando servidor, la funcion createServer recibe una funcion que se va a ejecutar cada vez que se ahce una peticion http,
	esta funcion recibe dos parametros, req que es el request donde me estan llegando los parametros de la petición que hace el usuario
	al servidor y res que significa respond, que es el canal por el cual yo voy a responder a esa peticion del usuario.
*/
const server = http.createServer(function (req, res) { 
	res.end("Hola io.js")
}) 		

/*
	Callback que recibe la funcion listen, por lo general los callbacks en node y io.js son el ultimo argumento de la funcion
	este callback se ejecuta al final que termine de escuchar el servidor

*/
server.listen(port, function () {
	console.log('Servidor escuchando en el puesto: ' + port)
})