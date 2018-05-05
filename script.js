var video; 

function afterLoad() {
	console.log("running after load");
	// querySelector to get element from HTML video element
	document.addEventListener('DOMContentLoaded',function() {
		var v = document.getElementById('videoElement');
		var c = document.getElementById('c');
		var context = c.getContext('2d');
		var cw = Math.floor(c.clientWidth / 100);
		var ch = Math.floor(c.clientHeight / 100);
		c.height = cw;
		c.width = ch;

		draw(v,context,cw,ch);
	});

	video = document.querySelector("#videoElement");

	// uses getUserMedia API to see what vendor it is (browser)
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

	// Checks to see if we are getting something from the webcam, the getUserMedia function the browser prompts user for permission of webcam
	if (navigator.getUserMedia) {       
		navigator.getUserMedia({video: true}, handleVideo, videoError);
	}
}

// Actually handles the display of the video stream from the webcam
function handleVideo(stream) {
		video.src = window.URL.createObjectURL(stream);
}

// error checking to throw exceptions
function videoError(e) {
		// do something
} 

function draw(v,c,w,h) {
	console.log("drawing image on canvas");
	c.drawImage(v,0,0,w,h);

	//data = context.getImageData(w/2,h/2,1,1);



	setTimeout(draw,20,v,c,w,h);
}
