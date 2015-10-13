$(document).ready(function(){
	hide();
	var data;
	var success;
	$("#coverart").on("click",function(){
		$.ajax({
			dataType: "text",
			url: "shawnminarik.json",
			success:function(result){
				var json = $.parseJSON(result);
				var i;
				for (i=0;i<4;i++){

					$(".Song"+i).append("<li class='songname'> " + json.Songs[i].SongName + " </li>");
					$(".Song"+i).append("<li class='artistname'> " + json.Songs[i].Artist + " </li>");
					$(".Song"+i).append("<li class='albumname'> " + json.Songs[i].Album + " </li>");
					$(".Song"+i).append("<li class='releasedate'> " + json.Songs[i].Release + " </li>");
					$(".Song"+i).append("<li class='genre'> " + json.Songs[i].Genres + " </li>");
					$(".Song"+i).append("<li class='cover'><a href='" + json.Songs[i].Link +"'>" + json.Songs[i].Artist+"</a></li>");
					$(".Song"+i).append("<li class='cover'><a href='" + json.Songs[i].Link +"'><img width='150px' height='150px' src='" + json.Songs[i].Cover + "'> </a></li>");

				}
			}
		});
		$(".Headers").append("<li>Song Name</li>\n<li>Artist</li>\n<li>Album</li>\n<li>Release Date</li>\n<li>Genre</li>\n<li>Link</li>\n<li>Cover</li>");
		$("footer").toggle();
	});
});

function hide(){
	$("footer").toggle();
}