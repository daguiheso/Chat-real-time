const path = require('path')
const st = require('st')  // modulo para servir archivos estaticos

const mount = st({
	// carpeta definida como estatica - relativa a la carpeta actual, un directorio mas arriba y el folder public
	path: path.join(__dirname, '..', 'public'),
	// archivo principal
	index: 'index.html'
})

/* Montando todo el directorio public en el servidor*/ 
function onRequest (req, res) {
	mount(req, res, function (err) {
		if(err) return 	res.end(err.message)

		res.statusCode = 404
		res.end(`404 Not found: ${req.url}`)
	})
}

function fail (err, res) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain')
    res.end(err.message)
}

module.exports = onRequest