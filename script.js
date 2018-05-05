var video; 

function afterLoad() {
	console.log("running after load");
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

	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

	if (navigator.getUserMedia) {       
		navigator.getUserMedia({video: true}, handleVideo, videoError);
	}
}

function handleVideo(stream) {
		video.src = window.URL.createObjectURL(stream);
}

function videoError(e) {
		// do something
} 

function draw(v,c,w,h) {
	console.log("drawing image on canvas");
	c.drawImage(v,0,0,w,h);

	//data = context.getImageData(w/2,h/2,1,1);



	setTimeout(draw,20,v,c,w,h);
}