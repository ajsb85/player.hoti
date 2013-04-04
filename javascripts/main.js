console.log('This would be the main JS file.');

SC.initialize({
	client_id: "43195eb2f2b85520cb5f65e78d6501bf"
});

window.addEventListener("load", function load(event){
window.removeEventListener("load", load, false); 
	SC.get("/tracks/12907308", function (track) {
		if(track.downloadable){
			$("#download").addClass('downloadable');
			$("#download").attr('onclick', "window.location.href='"+track.download_url+"?consumer_key=43195eb2f2b85520cb5f65e78d6501bf'");
		}
		document.querySelector('.albumplayer').style.backgroundImage="url('"+track.artwork_url.split("large").join("crop")+"')"
		SC.stream(track.uri, {autoPlay: true}, function (stream) {
			window.stream = stream;
			window.stream = stream.play();
		});
	});
},false);

$("#toggle").live("click", function () { 
	window.stream.togglePause();
	$("#toggle").toggleClass("play");
});
