if($format == 'tracks') {
	$player .= <<<MY_MARKER
	<script>
	window.addEventListener("load", function load(event){
		window.removeEventListener("load", load, false); 
		SC.get("/tracks/$id", function (track) {
			if(track.downloadable){
				$("#download").addClass('downloadable');
				$("#download").attr('onclick', "window.location.href='"+track.download_url+"?consumer_key=43195eb2f2b85520cb5f65e78d6501bf'");
$("#download").show();
}else{
                $("#download").attr("class","");
                $("#download").attr("onclick","");
                $("#download").hide();
}
			document.querySelector('.soundcloudIsGold').style.backgroundImage="url('"+track.artwork_url.split("large").join("crop")+"')"
			SC.stream(track.uri, {autoPlay: true}, function (stream) {
				window.stream = stream;
				//window.stream = stream.play();
			});
		});
		$("#toggle").on("click", function () { 
			window.stream.togglePause();
			$("#toggle").toggleClass("play");
		});
	},false);
	</script>
        <ul>
            <li id="toggle" class="pause"></li>
            <li id="download"></li>
        </ul>
MY_MARKER;
}else{
	$dir = substr(SIG_PLUGIN_DIR, 0, -1);
	$player .= <<<MY_MARKER
	<script>
	var playlists = {};
	var current = 0;
	var objImage = new Image(400,400); 
	function imagesLoaded(){
		document.querySelector('.soundcloudIsGold').style.backgroundImage="url('"+objImage.src+"')";
	}
	window.addEventListener("load", function load(event){
		window.removeEventListener("load", load, false); 
		SC.get("/playlists/$id", function (playlist) {
			playlists = playlist.tracks;
			playSong(0);
			if(playlist.artwork_url != null){
				if (document.images)
				{
				  objImage.onLoad=imagesLoaded();
				  objImage.src= playlist.artwork_url.split("large").join("crop");
				}
  
				
				}
		});
		$("#toggle").on("click", function () { 
			window.stream.togglePause();
			$("#toggle").toggleClass("play");
		});
		$("#next").on("click", function () { 
			window.stream.stop();
			$("#toggle").attr("class","pause");
			playNextSound();
			clearComments();
		});
		$("#prev").on("click", function () { 
			window.stream.stop();
			$("#toggle").attr("class","pause");
			playPrevSound();
			clearComments();
		});
	},false);
	
	function clearComments(){
		document.getElementById('comments').innerHTML = "";
		document.getElementById('user').innerHTML = "";
		document.getElementById('avatar').src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=";
	}
	
	function playSong(i){
			clearComments();
			current = i;
			var track = playlists[i];
			document.getElementById('track').innerHTML = current+1;
			document.getElementById('title').innerHTML = track.title;
			if(track.artwork_url != null){
				if (document.images)
				{
				  objImage.onLoad=imagesLoaded();
				  objImage.src= track.artwork_url.split("large").join("crop");
				}
			}
			
				//document.querySelector('.soundcloudIsGold').style.backgroundImage="url('"+track.artwork_url.split("large").join("crop")+"')";
			if(track.downloadable){
				$("#download").addClass('downloadable');
				$("#download").attr('onclick', "window.location.href='"+track.download_url+"?consumer_key=43195eb2f2b85520cb5f65e78d6501bf'");
				$("#download").show();
			}else{
				$("#download").attr("class","");
				$("#download").attr("onclick","");
				$("#download").hide();
			}
		SC.stream(track.uri, {autoPlay: true, onfinish:playNextSound, ontimedcomments: comments}, function (stream) {
			window.stream = stream;
			//window.stream = stream.play();
		});

	}
	
	function playNextSound(){
		if(playlists.length-1 > current)
			playSong(current + 1);
		else
			playSong(0);
	}
	
	function playPrevSound(){
		if(current==0)
			playSong(playlists.length-1);
		else
			playSong(current - 1);
	}
	
	function comments(comments){
		if (comments[0].body.indexOf("http") == -1) {
			document.getElementById('comments').innerHTML = comments[0].body;
			document.getElementById('avatar').src = comments[0].user.avatar_url;
			document.getElementById('user').innerHTML = comments[0].user.username;
		}		
	}
	</script>
        <ul>
            <li id="toggle" class="pause"></li>
            <li id="next"></li>
            <li id="prev"></li>
            <li id="download"></li>
			
        </ul>
MY_MARKER;
}
	}
//if($format == 'sets' || $format == 'set') $format = 'playlists';
	$player .= '</div>';
	$player .= '<h5 id="track"></h5>';
	$player .= '<h2 id="title"></h2>';
	$player .= '<img id="avatar" src="image.jpg" alt="An awesome image" />';
	$player .= '<h5 id="user"></h5>';
	$player .= '<h5 id="comments"></h5>';
        

	return $player;

}