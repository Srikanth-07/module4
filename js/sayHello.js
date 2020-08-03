(function(window) {
	var hellospeaker={};
	hellospeaker.speakword="hello";
	hellospeaker.speakname=function(names){
		console.log(hellospeaker.speakword+" "+names);
	}
	window.hellospeaker=hellospeaker;
})(window);