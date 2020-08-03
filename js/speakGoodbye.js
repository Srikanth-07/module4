(function(window){
	var goodbyespeaker={};
	goodbyespeaker.speakword="goodbye";
	goodbyespeaker.speakname=function(names){
		console.log(goodbyespeaker.speakword + " " + names);
	}
	window.goodbyespeaker=goodbyespeaker;
})(window);


