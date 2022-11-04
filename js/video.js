var video;

//load window:
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector('#player1')
	video.autoplay = false;
	video.loop = false;
	console.log("autoplay is set to " + video.autoplay);
	console.log("loop is set to " + video.loop);
});

//play video and update volume
document.querySelector("#play").addEventListener("click", function(){
	video.play();
	console.log("Video played");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%'
	document.querySelector("#slider").value = video.volume * 100;
})

//pause video:
document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Video paused");
})

//slow video by 10%:
document.querySelector('#slower').addEventListener("click", function() {
	video.playbackRate = video.playbackRate - (video.playbackRate * 0.1);
	console.log("Slowed down rate: " + video.playbackRate);
})

//speed up video by 10%:
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate + (video.playbackRate * 0.1);
	console.log("Sped up rate: " + video.playbackRate);
})

//skip ahead by 10 seconds:
document.querySelector("#skip").addEventListener("click", function(){
	video.currentTime += 10;
	if(video.ended)
	{
		video.currentTime = 0;
		video.play();
	}
	console.log("Skipped ahead 10 seconds. Now at " + video.currentTime);
})

//mute or unmute:
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted)
	{
		//unmute:
		console.log("Unmute button pressed");
		video.muted = false;
		video.volume = 1;
		document.querySelector("#mute").innerHTML = "Mute"; //button
		document.querySelector("#volume").innerHTML = video.volume * 100 + '%' //volume is:
		document.querySelector("#slider").value = video.volume * 100; //slider 
	}
	else{
		console.log("Mute button pressed");
		video.muted = true;
		video.volume = 0;
		document.querySelector("#mute").innerHTML = "Unmute"; //button
		document.querySelector("#volume").innerHTML = video.volume * 100 + '%'//volume is:
		document.querySelector("#slider").value = video.volume * 100; //slider 
	}
})

//volume slider:
document.querySelector("#slider").addEventListener("change", function() {
	console.log("got to function");
	slider_val = document.querySelector("#slider").value;
	document.querySelector("#volume").innerHTML = slider_val + '%' //volume is:
	video.volume = slider_val / 100; //put in range [0,1]
	console.log("Volume slider used, volume now: " + video.volume)
})

//oldschool button:
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old school button pressed")
	video.style.filter = "grayscale(100%)";
	video.style.width = "75%";
	video.style.border = "5px double grey"
	video.style.borderRadius = "20px";
	console.log("width changed")
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original button pressed")
	video.style.filter = "none";
	video.style.width = "90%";
	video.style.border = "2px solid black";
	video.style.borderRadius = "initial";

})
