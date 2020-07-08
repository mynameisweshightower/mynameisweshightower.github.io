var optionLeft = 0;

window.onload = function()
{
	//document.getElementById('portfolio-options').style.left = optionLeft + '%';
}

window.onresize = function()
{
	$(".sample").css({'max-width' : (window.innerWidth - 95) + 'px'});
	respondImage();
	//$(".sample").css({'max-height' : ($(".sample-holder").innerHeight - 180) + 'px'});
}

/*window.onscroll = function()
{
	$("#prev-sample, #next-sample").css({'line-height': $('.sample-holder').height() + 'px'});
}*/

// rotate the works categories
$("#next-category").on("click", { d: "n" }, rotate);
$("#prev-category").on("click", { d: "p" }, rotate);
var category;

var currdeg = 0;

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  $("#portfolio-options").css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

// show #samples-section 
$("#portfolio-options div:not(#portfolio-option-main)").on('click', function(){	

	$("#next-sample").css('visibility', 'visible');
	$("#samples-section").css({'height': '100vh'});
	$("#samples-section").css({'min-height': '775px'});
	$("#nav-samples").css({'height': '20px'});
	$("#nav-contact").css({'top': '150px'});
	
	$('html, body').animate({
		scrollTop: $("#samples-section").offset().top - 200
	}, 1000);
	
	$("#samples-section").removeClass();
	backstageLeft = 0;
	$("#backstage").css({'left': backstageLeft + '%'});
	window.onresize();
});

// populate #samples-section
var web_samples_html = "<div class='sample-holder'><img src='stock/images/web1.png' class='sample' alt='' title=''><span class='web-caption-title'><a href='http://www.hightowerclinical.com' target='_blank' alt='' title=''>Hightower Clinical Trial Services</a></span><span class='web-caption-description'>Web Development</span></div>";
web_samples_html += "<div class='sample-holder'><img src='stock/images/web2.png' class='sample' alt='' title=''><span class='web-caption-title'><a href='http://mynameisweshightower.github.io/AirKidz/' target='_blank' alt='' title=''>AIRKIDZ.com</a></span><span class='web-caption-description'>Home Page Redesign</span></div>";
web_samples_html += "<div class='sample-holder'><img src='stock/images/web3.png' class='sample' alt='' title=''><span class='web-caption-title'><a href='http://kiopah.aisites.com' target='_blank' alt='' title=''>mynameisweshightower</a></span><span class='web-caption-description'>Web Development</span></div>";
web_samples_html += "<div class='sample-holder'><img src='stock/images/web4.png' class='sample' alt='' title=''><span class='web-caption-title'>Kiopah v1</span><span class='web-caption-description'>Web Development</span></div>";
web_samples_html += "<div class='sample-holder'><img src='stock/images/web5.png' class='sample' alt='' title=''><span class='web-caption-title'><a href='http://www.uretekicr.com' target='_blank' alt='' title=''>Uretek ICR</a></span><span class='web-caption-description'>Analytics</span></div>";

$("#web").on('click', function(){
	category = 0;
	$("#nav-samples").css({'background': '#969696'});
	$("#samples-section").addClass("samples-web");
	$("#nav-samples").text("Web");
	$("#samples-header").text("Web");
	$("#backstage").html(web_samples_html);
});

var design_samples_html = "<div class='sample-holder'><img src='stock/images/expdesign2.jpg' class='sample' alt='' title=''></div>";
design_samples_html += "<div class='sample-holder'><img src='stock/images/design6.jpg' class='sample' alt='' title=''></div>";
design_samples_html += "<div class='sample-holder'><img src='stock/images/expdesign4.jpg' class='sample' alt='' title=''></div>";
design_samples_html += "<div class='sample-holder'><img src='stock/images/expdesign5.jpg' class='sample' alt='' title=''></div>";
design_samples_html += "<div class='sample-holder'><img src='stock/images/expdesign8.jpg' class='sample' alt='' title=''></div>";
//design_samples_html += "<div class='sample-holder'><img src='stock/images/design1.jpg' class='sample'></div>";

$("#design").on('click', function(){
	category = 0;
	$("#nav-samples").css({'background': '#fa7d00'});
	$("#samples-section").addClass("samples-design");
	$("#nav-samples").text("Design");
	$("#samples-header").text("Design");
	$("#backstage").html(design_samples_html);
});

var photography_samples_html = "<div class='sample-holder'><img src='stock/images/photog1.jpg' class='sample' alt='' title=''></div>";
photography_samples_html += "<div class='sample-holder'><img src='stock/images/photog2.jpg' class='sample' alt='' title=''></div>";
photography_samples_html += "<div class='sample-holder'><img src='stock/images/photog3.jpg' class='sample' alt='' title=''></div>";
photography_samples_html += "<div class='sample-holder'><img src='stock/images/photog4.jpg' class='sample' alt='' title=''></div>";
photography_samples_html += "<div class='sample-holder'><img src='stock/images/photog5.jpg' class='sample' alt='' title=''></div>";

$("#photography").on('click', function(){
	category = 0;
	$("#nav-samples").css({'background': '#fa0000'});
	$("#samples-section").addClass("samples-photography");
	$("#samples-header").text("Photography");
	$("#nav-samples").text("Photography");
	$("#backstage").html(photography_samples_html);
});

var audio_samples_html = "<div class='sample-holder'><h4>Untitled 1</h4><audio id='song0' class='player'><source src='stock/audio/audio1.mp3' type='audio/mp3'><source src='stock/audio/audio1.ogg' type='audio/ogg'>Your browser does not support the Audio tag.</audio><a href='#' id='audioControl0' onclick='return playAudio(0)'><img src='stock/images/play.png' class='aButton' id='audioButton0'></a><div id='songHolderbg0'></div></div>";
audio_samples_html += "<div class='sample-holder'><h4>Pick Loop 1</h4><audio id='song1' class='player'><source src='stock/audio/audio2.mp3' type='audio/mp3'><source src='stock/audio/audio2.ogg' type='audio/ogg'>Your browser does not support the Audio tag.</audio><a href='#' id='audioControl1' onclick='return playAudio(1)'><img src='stock/images/play.png' class='aButton' id='audioButton1'></a><div id='songHolderbg1'></div></div>";
audio_samples_html += "<div class='sample-holder'><h4>Guitars</h4><audio id='song2' class='player'><source src='stock/audio/audio3.mp3' type='audio/mp3'><source src='stock/audio/audio3.ogg' type='audio/ogg'>Your browser does not support the Audio tag.</audio><a href='#' id='audioControl2' onclick='return playAudio(2)'><img src='stock/images/play.png' class='aButton' id='audioButton2'></a><div id='songHolderbg2'></div></div>";
audio_samples_html += "<div class='sample-holder'><h4>Short Loop</h4><audio id='song3' class='player'><source src='stock/audio/audio4.mp3' type='audio/mp3'><source src='stock/audio/audio4.ogg' type='audio/ogg'>Your browser does not support the Audio tag.</audio><a href='#' id='audioControl3' onclick='return playAudio(3)'><img src='stock/images/play.png' class='aButton' id='audioButton3'></a><div id='songHolderbg3'></div></div>";


$("#audio").on('click', function(){
	category = 2;
	$("#nav-samples").css({'background': '#32cbfa'});
	$("#samples-section").addClass("samples-audio");
	$("#samples-header").text("Audio");
	$("#nav-samples").text("Audio");
	$("#backstage").html(audio_samples_html);
});

var video_samples_html = '<div class="sample-holder"><video id="currentVideo0"><source id="mp4Src" src="stock/video/video1.mp4" type="video/mp4" >Your browser does not support the video tag.</video><a href="#" class="movieControl" onclick="return playVid(0)"><img src="stock/images/play.png" id="playerButton0"></a></div>';
video_samples_html += '<div class="sample-holder"><video id="currentVideo1"><source id="mp4Src" src="stock/video/video2.mp4" type="video/mp4">Your browser does not support the video tag.</video><a href="#" class="movieControl" onclick="return playVid(1)"><img src="stock/images/play.png" id="playerButton1"></a></div>';
video_samples_html += '<div class="sample-holder"><video id="currentVideo2"><source id="mp4Src" src="stock/video/video3.mp4" type="video/mp4">Your browser does not support the video tag.</video><a href="#" class="movieControl" onclick="return playVid(2)"><img src="stock/images/play.png" id="playerButton2"></a></div>';

$("#video").on('click', function(){
	category = 3;
	$("#nav-samples").css({'background': '#99c908'});
	$("#nav-samples").text("Video");
	$("#samples-header").text("Video");
	$("#samples-section").addClass("samples-video");
	$("#backstage").html(video_samples_html);
	var vidResponse = setTimeout(respondImage(), 1000);
});

var backstageLeft = 0;

$("#prev-sample").on('click', function(){
	$("#next-sample").css('visibility', 'visible');
	if (backstageLeft < 0)
	{
		backstageLeft += 100;
		$("#backstage").css({'left': backstageLeft + '%'});
	}
	
	if (backstageLeft == 0)
	{
		$("#prev-sample").css('visibility', 'hidden');
	}
});

$("#next-sample").on('click', function(){
	$("#prev-sample").css('visibility', 'visible');
	if (category == 2) // audio
	{
		if (backstageLeft > -300)
		{
			backstageLeft -= 100;
			$("#backstage").css({'left': backstageLeft + '%'});
		}
		
		if (backstageLeft == -300)
		{
			$("#next-sample").css('visibility', 'hidden');
		}
	}
	else if (category == 3) // vid
	{
		if (backstageLeft > -200)
		{
			backstageLeft -= 100;
			$("#backstage").css({'left': backstageLeft + '%'});
		}
		
		if (backstageLeft == -200)
		{
			$("#next-sample").css('visibility', 'hidden');
		}
	}
	else
	{
		if (backstageLeft > -400)
		{
			backstageLeft -= 100;
			$("#backstage").css({'left': backstageLeft + '%'});
		}
		
		if (backstageLeft == -400)
		{
			$("#next-sample").css('visibility', 'hidden');
		}
	}
});

// AUDIO CONTROLS
var audiomp3 = Array("stock/audio/audio1.mp3", 
					"stock/audio/audio2.mp3", 
					"stock/audio/audio3.mp3", 
					"stock/audio/audio4.mp3"); 
					//"stock/audio/audio5.mp3");
var audioogg = Array("stock/audio/audio1.ogg", "stock/audio/audio2.ogg", "stock/audio/audio3.ogg", "stock/audio/audio4.ogg", "stock/audio/audio5.ogg");
var audioTitle = Array("Untitled 1", "Pick Loop", "Guitars", "Short Loop", "Audio 5");

var scrubTimer;
var i;
var playAudio = function(i)
{
	console.log('fire 1. i = ' + i);
	if ($("#song" + i).get(0).paused)
	{
		console.log('fire 2. i = ' + i);
		$("#song" + i).get(0).play();
		
		$("#audioButton" + i).attr("src", "stock/images/pause.png");
		
		scrubTimer = setInterval(function(){scrub(i)}, 100);
		scrub(i);
	}
	else
	{
		$("#song" + i).get(0).pause();
		$("#audioButton" + i).attr("src", "stock/images/play.png");
		clearInterval(scrubTimer);
	}
	
	return false;
}

function scrub(i)
{
	var pctDone = ($("#song" + i).get(0).currentTime) / $("#song" + i).get(0).duration * 100;
	console.log(pctDone);
	//jQuery(".songHolder div").css({'width': pctDone + "%"});
	jQuery("#songHolderbg" + i).css({'width': pctDone + "%"});
}

//	/END AUDIO CONTROLS

// VIDEO CONTROLS
$("#currentVideo0").on('progress', function(){
	//console.log($("#currentVideo0").get(0).buffered.end(0));
	console.log("loading");
});

$("video").on('load', function(){
	respondImage();
});

var playVid = function(i)
{
	console.log('fire 1. i = ' + i);
	if ($("#currentVideo" + i).get(0).paused)
	{
		console.log('fire 2. i = ' + i);
		$("#currentVideo" + i).get(0).play();
		$("#playerButton" + i).attr("src", "stock/images/pause.png");
	}
	else
	{
		$("#currentVideo" + i).get(0).pause();
		$("#playerButton" + i).attr("src", "stock/images/play.png");
	}
	return false;
}

//$("#currentVideo").onprogress = function()
//{
//	$("loading").style.display = "";
	
//}
// /END VIDEO CONTROLS

var respondImage = function()
{
	/*if (cat == 1 || cat == 2) // design, photog
	{
		$("imageHolder").style.width = $("currentImage").width + 30 + "px";
		$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
		$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	}*/
	
	//	$("imageHolder").style.width = $("currentVideo").width + 30 + "px";
	//	$("imageHolder").style.marginTop = (($("currentVideo").height + 120) / 2) * (-1) + "px";
	//	$("imageHolder").style.marginLeft = (($("currentVideo").width + 30) / 2) * (-1) + "px";
	//	$("imageHolder").style.height = $("currentVideo").height + 60 + "px";	

	$("video").css({"max-width": $("#stage").width() - 20 + "px"});//, "max-height": $("#stage").height() - 20 + "px"});
	console.log('loaded');
	
	/*else if (cat == 5) // interactive
	{
		console.log("interactive respondImage fired");
		$("currentInteractiveHolder").style.width = (window.innerWidth - 95) + "px";
		$("currentInteractiveHolder").style.height = (window.innerHeight - 180) + "px";
		$("imageHolder").style.width = parseInt($("currentInteractiveHolder").style.width) + 30 + "px";
		$("imageHolder").style.marginTop = ((parseInt($("currentInteractiveHolder").style.height) + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = ((parseInt($("currentInteractiveHolder").style.width) + 30) / 2) * (-1) + "px";
		$("imageHolder").style.height = parseInt($("currentInteractiveHolder").style.height) + 60 + "px";
		
	}
	
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";*/
//	$("loading").style.display = "";
	
}