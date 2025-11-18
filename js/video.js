var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
video=this.document.querySelector("#player1");
video.autoplay=false;
console.log("auto play is set to"+video.autoplay);
video.loop=false;
console.log("loop is set to"+video.loop)
});

// window.addEventListener("play", function() {
// 	console.log("The video is now playing");
// video=this.document.querySelector("#player1");
// video.play()=true;

// })


document.querySelector("#play").addEventListener("click", function(){
	console.log("this video is playing");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("this video is paused")
	video.pause();
})



// slow down the video each time "slower" is clicked
document.querySelector("#slower").addEventListener("click", function(){
	console.log("new speed is "+video.playbackRate);
	video.playbackRate *= 0.90;
});

//Increase the current video speed each time the button is clicked and log the new speed to the console.
document.querySelector("#faster").addEventListener("click", function(){
	console.log("new speed is "+video.playbackRate);
	video.playbackRate /= 0.90;
});

//skip ahead in the video by 10 seconds each time the button is clicked. If it reaches the end of the video,go back to the start of the video - no farther. Log the current location of the video.	
document.querySelector("#skip").addEventListener("click", function(){
	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0;
	}
	else {
		video.currentTime += 10;
	}
	console.log("current location is "+ video.currentTime + "seconds");
});

// Mute/unmute the video and update the text in the button.	
document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

// Change the volume based on the slider and update the volume information.
	document.querySelector("#slider").addEventListener("input", function(){	
		video.volume = this.value / 100;
		console.log("the current volume is "+ video.volume);
		document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	});

//Utilize the existing oldSchool class on the video element.
document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

//Remove the oldSchool class from the video element.
document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});
