'use strict'

const http = require('http') 			
const fs = require('fs') // module file system
const path = require('path') // manejo de rutas en diferentes SO
const port = process.env.PORT || 8080  

/*	Server aparte de recibir un callback, tambien es un event emmiter, osea yo puedo ver el servidor como una instancia
	de event emmiter  */

const server = http.createServer()

// cada vez que se ejecuta el evento request, se ejecuta la funcion onRequest
server.on('request', onRequest)
// cada vez que se ejecuta el evento listening, se ejecuta la funcion onListening
server.on('listening', onListening)

server.listen(port)

function onRequest (req, res) {
	/* Verficar url */
	let uri = req.url

	/* si URL comienza con /index o si es la ruta raiz */
	if(uri.startsWith('/index') || uri === '/') {
		return serveIndex(res)
	}

	if(uri === '/app.js') {
		return serveApp(res)	
	}

	/* Si no es ninguna de las anteriores */
	res.statusCode = 404
	res.end(`404 not found: ${uri}`)
}
/* Recibe como argumento res porque es la respuesta que se va a enviar */
function serveIndex (res) {
/*  concatenando dirname que es el directorio actual donde se esta ejecutando la app 
	y hacemos join con el directorio public y con index.html  */
	let index = path.join(__dirname, 'public', 'index.html') 

	/* creando readStream de lectura a partir de la clase de fileSystem*/
	let rs = fs.createReadStream(index) 

	/* seteando el header de la peticion*/
	res.setHeader('Content-Type', 'text/html')
	/* leyendo stream utilizando el metodo llamado pipe  */
	rs.pipe(res)

	/* un strwam como es un event emitter, tiene el metodo error */
	rs.on('error', function (err) {
		res.setHeader('Content-Type', 'text/plain')
		res.end(err.message)
	})
}

function serveApp (res) {
	let app= path.join(__dirname, 'public', 'app.js') 
	let rs = fs.createReadStream(app) 

	res.setHeader('Content-Type', 'text/javascript')
	rs.pipe(res)

	rs.on('error', function (err) {
		res.setHeader('Content-Type', 'text/plain')
		res.end(err.message)
	})
}

function onListening () {
	console.log(`Servidor escuchando en el puesto: ${port}`)
}