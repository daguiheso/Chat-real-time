const Webrtc2Images = require('webrtc2images')

const rtc = new Webrtc2Images({
  width: 200,
  height: 200,
  frames: 10,
  type: 'image/jpeg',
  quality: 0.4,  // calidad del video
  interval: 200  // cada 200 milisegundos hace la toma del frame
})

/* empezar el video - funcionar la camara*/
rtc.startVideo(function (err) {
	if (err) return logError(err)
}) 

const record = document.querySelector('#record')

record.addEventListener('click', function (e) {
	e.preventDefault()

	/* llamando funcionalidad de rtc */
	rtc.recordVideo(function (err, frames) {
		if (err) return logError(err)

		console.log(frames)
	})

}, false)

function logError (err) {
	console.error(err)
}