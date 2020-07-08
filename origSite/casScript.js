var $ = function(id)
{
	return document.getElementById(id);
}

window.onload = function()
{
	window.onresize();

	$("currentImage").style.maxWidth = (window.innerWidth - 95) + "px";
	$("currentImage").style.maxHeight = (window.innerHeight - 180) + "px";
	$("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	
//	$("imageHolder").style.maxWidth = (window.innerWidth - 200) + "px";
//	$("imageHolder").style.maxHeight = (window.innerHeight - 60) + "px";
}

window.onresize = function()
{
	$("currentImage").style.maxWidth = (window.innerWidth - 95) + "px";
	$("currentImage").style.maxHeight = (window.innerHeight - 180) + "px";
	$("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
	
//	$("imageHolder").style.maxWidth = (window.innerWidth - 200) + "px";
//	$("imageHolder").style.maxHeight = (window.innerHeight - 60) + "px";
}

var designOver = function()
{
	//$("thumbs").style.marginBottom = "-25px";
	$("designLink").style.backgroundPosition = "0em -0.4em";
	$("designSelect").style.background = "rgba(100,50,50,0.9)";
	//$("designSelect").style.width = "200px";
	//$("designSelect").style.height = "200px";
	//$("designSelect").style.marginLeft = "-25px";
	//$("designSelect").style.marginTop = "-25px";
	
	//$("photographySelect").style.width = "140px";
	//$("photographySelect").style.height = "140px";
	//$("audioSelect").style.width = "140px";
	//$("audioSelect").style.height = "140px";
	//$("videoSelect").style.width = "140px";
	//$("videoSelect").style.height = "140px";
	//$("interactiveSelect").style.width = "140px";
	//$("interactiveSelect").style.height = "140px";
}

var designOut = function()
{
	$("thumbs").style.marginBottom = "";
	$("designLink").style.backgroundPosition = "";
	$("designSelect").style.background = "";
	$("designSelect").style.width = "";
	$("designSelect").style.height = "";
	$("designSelect").style.marginLeft = "";
	$("designSelect").style.marginTop = "";
	
	$("photographySelect").style.width = "";
	$("photographySelect").style.height = "";
	$("audioSelect").style.width = "";
	$("audioSelect").style.height = "";
	$("videoSelect").style.width = "";
	$("videoSelect").style.height = "";
	$("interactiveSelect").style.width = "";
	$("interactiveSelect").style.height = "";
}

var picturePath = "stock/images/";

//design picture array
var i;
var cat;
var designFile = Array("design1.jpg",
						"design2.jpg", 
						"design3.jpg", 
						"design4.jpg", 
						"design5.jpg", 
						"design6.jpg",
						"design7.png",
						"design8.png",
						"design9.png",
						"design10.png",
						"design11.png",
						"design12.png",
						"design13.png");
var designCaption = Array("Explosion", 
							"Drink Responsibly", 
							"Ditch", 
							"Invasion", 
							"Bloop", 
							"Howl",
							"Ship",
							"Jacob's Ladder",
							"Phone",
							"Victrola",
							"Zoetrope",
							"Camera",
							"Scissors");
var designDesc = Array("Copied from a cut paper design", 
						"Bar code redesign", 
						"Photo-collage", 
						"Gradient Mesh Tool", 
						"Copied from a cut paper design", 
						"Typographic Self-Portrait", 
						"Pen Tool, Gradient Exercise",
						"Graphic for Interactive section",
						"Graphic for Contact section",
						"Graphic for Audio section",
						"Graphic for Video section",
						"Graphic for Photog section",
						"Graphic for Design section");
var designExp = "School has given me a great chance to work in different media and styles. Below are a few of the things my curriculum has thrown at me.";

var exp_designFile = Array("expdesign1.jpg", 
							"expdesign2.jpg",
							"expdesign3.png",
							"expdesign4.jpg",
							"expdesign5.jpg",
							"expdesign6.jpg",
							"expdesign7.png",
							"expdesign8.jpg",
							"expdesign9.jpg");
var exp_designCaption = Array("Birdo",
								"DE logo",
								"Potato",
								"Beach",
								"Fresh",
								"Birds",
								"Atom",
								"Heart Beats",
								"Spider");
var exp_designDesc = Array("Photoshop adjustments exercise", 
							"Local DJ logo", 
							"Pen tool exercise", 
							"Image manipulation", 
							"Road20 Farms ad",
							"Image manipulation ",
							"Photoshop layer style exercise",
							"Image manipulation",
							"Image manipulation");
var exp_designExp = "This is a description of the experimental design section.";

var showDesign = function()
{
	i = 0;
	//cat = 1;
	$("homeTitle").innerHTML = '<span class="titleQuote">&quot;</span><span id="titleTitle">D</span>esign<span class="titleQuote">&quot;</span>';
	$("titleTitle").style.marginRight = "0px";
	$("topOutlinePortfolio").style.width = "20%";
	$("topOutlinePortfolio").style.left = "44%";
	$("bottomOutlinePortfolio").style.width = "28%";
	$("bottomOutlinePortfolio").style.left = "36%";
	
	$("portfolioBG").style.display = "block";
	$("portfolioBG").src = "images/scissors.png";
	
	$("explanation").innerHTML = designExp;
	$("thumbs").innerHTML = "";
	$("thumbs").style.width = "65%";
	$("thumbs").style.float = "right";
	$("designLink").style.backgroundPosition = "0em -0.4em";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < designFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='setDesign(); return showImage(" + i + ")'><img src='" + picturePath + "t_" + designFile[i] + "' /><div class='thumbTitle thumbTitleDesign'>" + designCaption[i] + "</div></a></div>";
		i++;
	}
	
	i = 0;
	
	$("thumbs").innerHTML += "<h2>Experiments</h2>";
	while (i  < exp_designFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='setExperimentDesign(); return showImage(" + i + ");'><img src='" + picturePath + "t_" + exp_designFile[i] + "' /><div class='thumbTitle thumbTitleDesign'>" + exp_designCaption[i] + "</div></a></div>";
		i++;
	}
	
	return false;
}

var setDesign = function()
{
	cat = 1;
}

var setExperimentDesign = function()
{
	cat = 6;
	return false;
}

var photogFile = Array("photog1.jpg", 
						"photog2.jpg", 
						"photog3.jpg", 
						"photog4.jpg", 
						"photog5.jpg",
						"photog6.jpg",
						"photog7.jpg",
						"photog8.jpg",
						"photog9.jpg");
var photogCaption = Array("Air Mine", 
							"Voyeur", 
							"Trampled", 
							"Stop Sign", 
							"Fountain",
							"Leaf",
							"Nightcap",
							"Tension",
							"Filter");
var photogExp = "A sample of some of the light I have imprisoned in my camera and the techniques I used to trap it.";
var photogDesc = Array("Depth of Field", "Depth of Field", "Point of View", "Abstract", "Stopped Motion", "Lens Flare", "Light Writing", "Graphic Elements - Triangle", "Abstract");

var exp_photogFile = Array("expphotog1.jpg",
							"expphotog2.jpg",
							"expphotog3.jpg",
							"expphotog4.jpg");
							//,"expphotog5.jpg");
var exp_photogCaption = Array("Squirrel",
								"Yawn",
								"Stop Soon",
								"Burst",
								"exp photo 5");
var exp_photogDesc = Array("Point of View", "Scanogram", "Contrast - Two Primaries", "Stopped Motion", "");
var exp_photogExp = "Here are a few things done outside the classroom environment.";

var showPhotography = function()
{
	i = 0;
	cat = 2;
	$("homeTitle").innerHTML = '<span class="titleQuote">&quot;</span><span id="titleTitle">P</span>hotography<span class="titleQuote">&quot;</span>';
	$("titleTitle").style.marginRight = "0px";
	$("topOutlinePortfolio").style.width = "54%";
	$("topOutlinePortfolio").style.left = "26%";
	$("bottomOutlinePortfolio").style.width = "59.5%";
	$("bottomOutlinePortfolio").style.left = "19.5%";
	
	$("explanation").innerHTML = photogExp;
	$("thumbs").innerHTML = "";
	
	$("portfolioBG").style.display = "block";
	$("portfolioBG").src = "images/oldCamera.png";
	$("thumbs").style.width = "65%";
	$("thumbs").style.float = "right";
		
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "0em -0.4em";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < photogFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='setPhotog(); return showImage(" + i + ")'  id='" + i + "'><img src='" + picturePath + "t_" + photogFile[i] + "'/><div class='thumbTitle thumbTitlePhotog'>" + photogCaption[i] + "</div></a></div>";
		i++;
	}
	
	i = 0;
	
	$("thumbs").innerHTML += "<h2>Experiments</h2> <p>" + exp_photogExp + "</p>";
	while (i < exp_photogFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='setExpPhotog(); return showImage(" + i + ");'><img src='" + picturePath + "t_" + exp_photogFile[i] + "' /><div class='thumbTitle thumbTitleDesign'>" + exp_photogCaption[i] + "</div></a></div>";
		i++;
	}
	
	return false;
}

var setPhotog = function()
{
	cat = 2;
}

var setExpPhotog = function()
{
	cat = 7;
}

var photogOver = function()
{
	$("photographyLink").style.backgroundPosition = "0em -0.4em";
	$("photographySelect").style.background = "rgba(100,100,50,0.9)";
	
	/*$("photographySelect").style.width = "200px";
	$("photographySelect").style.height = "200px";
	$("photographySelect").style.marginLeft = "";
	$("photographySelect").style.marginRight = "-25px";
	$("photographySelect").style.marginTop = "-25px";
	
	$("designSelect").style.width = "140px";
	$("designSelect").style.height = "140px";
	$("audioSelect").style.width = "140px";
	$("audioSelect").style.height = "140px";
	$("videoSelect").style.width = "140px";
	$("videoSelect").style.height = "140px";
	$("interactiveSelect").style.width = "140px";
	$("interactiveSelect").style.height = "140px";
	
	$("thumbs").style.marginBottom = "-25px";*/
}

var photogOut = function()
{
	$("photographyLink").style.backgroundPosition = "";
	$("photographySelect").style.background = "";
	
	$("designSelect").style.width = "";
	$("designSelect").style.height = "";
	$("photographySelect").style.marginLeft = "";
	$("photographySelect").style.marginRight = "";
	$("photographySelect").style.marginTop = "";
	
	$("photographySelect").style.width = "";
	$("photographySelect").style.height = "";
	$("audioSelect").style.width = "";
	$("audioSelect").style.height = "";
	$("videoSelect").style.width = "";
	$("videoSelect").style.height = "";
	$("interactiveSelect").style.width = "";
	$("interactiveSelect").style.height = "";
	
	$("thumbs").style.marginBottom = "";
}

var audiomp3 = Array("stock/audio/audio1.mp3", 
					"stock/audio/audio2.mp3", 
					"stock/audio/audio3.mp3", 
					"stock/audio/audio4.mp3"); 
					//"stock/audio/audio5.mp3");
var audioogg = Array("stock/audio/audio1.ogg", "stock/audio/audio2.ogg", "stock/audio/audio3.ogg", "stock/audio/audio4.ogg", "stock/audio/audio5.ogg");
var audioTitle = Array("Untitled 1", "Pick Loop", "Guitars", "Short Loop", "Audio 5");
var audioDesc = Array("Multiple track layering in Adobe Audition",
						 "Drums created in Fruity Loops, mixed in Adobe Audition", 
						 "Multiple track layering, effects in Adobe Audition", 
						 "Short loop made in Fruity Loops", "Description 5");
var audioExp = "Like the universe, this section is composed of vibrating strings and loops of varying length.";

var showAudio = function()
{
	i = 0;
	cat = 3;
	
	$("homeTitle").innerHTML = '<span class="titleQuote">&quot;</span><span id="titleTitle">A</span>udio<span class="titleQuote">&quot;</span>';
	$("titleTitle").style.marginRight = "0px";
	$("topOutlinePortfolio").style.width = "17.5%";
	$("topOutlinePortfolio").style.left = "44.9%";
	$("bottomOutlinePortfolio").style.width = "26.5%";
	$("bottomOutlinePortfolio").style.left = "36.5%";
	
	$("portfolioBG").style.display = "block";
	$("portfolioBG").src = "images/victrola.png";
	$("thumbs").style.width = "65%";
	$("thumbs").style.float = "right";
		
	$("explanation").innerHTML = audioExp;
	$("thumbs").innerHTML = "";
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "0em -0.4em";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < audiomp3.length)
	{
		$("thumbs").innerHTML += "<div class='songHolder'>" +
		"<audio id='song" + i + "'>" +
	    "<source src='" + audiomp3[i] + "' type='audio/mp3'>" +
	    "<source src='" + audioogg[i] + "' type='audio/ogg'>" +
	    "Your browser does not support the Audio tag." +
	    "</audio>" +
		"<a href='#' id='audioControl" + i + "' onclick='return playAudio(" + i + ")'><img src='images/play.png' class='aButton' id='audioButton" + i + "'/></a>" +
		"<h4>" + audioTitle[i] + "</h4>" +
		"<span class='audioDesc'>" + audioDesc[i] + "</span>" +
		"<span id='playStatus" + i + "' class='pStatus'>Paused</span>" +
		"</div>";
		
		i++;
	}
	
	return false;
}

var playAudio = function(i)
{
	if ($("song" + i).paused)
	{
		$("song" + i).play();
		$("audioButton" + i).src = "images/pause.png";
		$("playStatus" + i).innerHTML = "Playing";
	}
	else
	{
		$("song" + i).pause();
		$("audioButton" + i).src = "images/play.png";
		$("playStatus" + i).innerHTML = "Paused";
	}
	
	return false;
}

var audioOver = function()
{
	$("audioLink").style.backgroundPosition = "0em -0.4em";
	$("audioSelect").style.background = "rgba(50,100,50,0.9)";
	
	/*$("audioSelect").style.width = "200px";
	$("audioSelect").style.height = "200px";
	$("audioSelect").style.marginLeft = "";
	$("audioSelect").style.marginRight = "-35px";
	$("audioSelect").style.marginTop = "-25px";
	
	$("designSelect").style.width = "140px";
	$("designSelect").style.height = "140px";
	$("photographySelect").style.width = "140px";
	$("photographySelect").style.height = "140px";
	$("videoSelect").style.width = "140px";
	$("videoSelect").style.height = "140px";
	$("interactiveSelect").style.width = "140px";
	$("interactiveSelect").style.height = "140px";
	
	$("thumbs").style.marginBottom = "-25px";*/
}

var audioOut = function()
{
	$("audioLink").style.backgroundPosition = "";
	$("audioSelect").style.background = "";
	
	$("designSelect").style.width = "";
	$("designSelect").style.height = "";
	$("audioSelect").style.marginLeft = "";
	$("audioSelect").style.marginRight = "";
	$("audioSelect").style.marginTop = "";
	
	$("photographySelect").style.width = "";
	$("photographySelect").style.height = "";
	$("audioSelect").style.width = "";
	$("audioSelect").style.height = "";
	$("videoSelect").style.width = "";
	$("videoSelect").style.height = "";
	$("interactiveSelect").style.width = "";
	$("interactiveSelect").style.height = "";

	$("thumbs").style.marginBottom = "";
}

var videoFile = Array("stock/video/video1.mp4", "stock/video/video2.mp4", "stock/video/video3.mp4");
var videoCaption = Array("Flicker", "Haunt", "Paperclips");
var videoDesc = Array("Photoshop Animation", "Stop Motion Animation made with Adobe Premiere", "Infomercial made with Adobe After Effects");
var videoExp = "In full color!";

var showVideo = function()
{
	i = 0;
	cat = 4;
	
	$("homeTitle").innerHTML = '<span class="titleQuote">&quot;</span><span id="titleTitle">V</span>ideo<span class="titleQuote">&quot;</span>';
	$("titleTitle").style.marginRight = "0px";
	$("topOutlinePortfolio").style.width = "16.5%";
	$("topOutlinePortfolio").style.left = "45.5%";
	$("bottomOutlinePortfolio").style.width = "21.5%";
	$("bottomOutlinePortfolio").style.left = "40.5%";
	$("titleTitle").style.marginRight = "-0.1em";
	
	$("portfolioBG").style.display = "block";
	$("portfolioBG").src = "images/zoetrope.png";
	$("thumbs").style.width = "65%";
	$("thumbs").style.float = "right";
		
	$("explanation").innerHTML = videoExp;
	$("thumbs").innerHTML = "";
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "0em -0.4em";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < videoFile.length)
	{
		$("thumbs").innerHTML += "<div class='vidHolder'>" +
									"<video id='mov" + i + "'>" +
										"<source src='" + videoFile[i] + "' type='video/mp4'>" +
										"<source src='#' type='video/ogg'>" +
										"Your browser does not support the video tag." +
									"</video>" +
									"<a href='#' id='movieControl' onclick='return playVid(" + i + ")'><img src='images/play.png' id='playerButton" + i + "' /></a>" +
									"<span class='vidDesc'>" + videoCaption[i] + "</span>" +
								"</div>";
		i++;
	}
	
	return false;
}


var playVid = function(i)
{
	if ($("mov" + i).paused)
	{
		$("mov" + i).play();
		$("playerButton" + i).src = "images/pause.png";
	}
	else
	{
		$("mov" + i).pause();
		$("playerButton" + i).src = "images/play.png";
	}
	
	return false;
}

var videoOver = function()
{
	$("videoLink").style.backgroundPosition = "0em -0.4em";
	$("videoSelect").style.background = "rgba(100,50,100,0.9)";
	/*$("videoSelect").style.width = "200px";
	$("videoSelect").style.height = "200px";
	$("videoSelect").style.marginLeft = "-12px";
	$("videoSelect").style.marginRight = "-12px";
	$("videoSelect").style.marginTop = "-25px";
	
	$("designSelect").style.width = "140px";
	$("designSelect").style.height = "140px";
	$("photographySelect").style.width = "140px";
	$("photographySelect").style.height = "140px";
	$("audioSelect").style.width = "140px";
	$("audioSelect").style.height = "140px";
	$("interactiveSelect").style.width = "140px";
	$("interactiveSelect").style.height = "140px";
	
	$("thumbs").style.marginBottom = "-25px";*/
}

var videoOut = function()
{
	$("videoLink").style.backgroundPosition = "";
	$("videoSelect").style.background = "";
	$("designSelect").style.width = "";
	$("designSelect").style.height = "";
	$("videoSelect").style.marginLeft = "";
	$("videoSelect").style.marginRight = "";
	$("videoSelect").style.marginTop = "";
	
	$("photographySelect").style.width = "";
	$("photographySelect").style.height = "";
	$("audioSelect").style.width = "";
	$("audioSelect").style.height = "";
	$("videoSelect").style.width = "";
	$("videoSelect").style.height = "";
	$("interactiveSelect").style.width = "";
	$("interactiveSelect").style.height = "";
	
	$("thumbs").style.marginBottom = "";
}

var interactiveFile = Array("interactive1.jpg", 
							"interactive2.jpg", 
							"interactive3.jpg", 
							"interactive4.jpg", 
							"interactive5.jpg",
							"interactive6.jpg");
var interactiveCaption = Array("Flash 1", "Javascript", "Ethanol Explorer", "CSS", "Flash 3", "Portfolios");
var interactiveDesc = Array("Flash 1 Final Project. Click <a href='http://kiopah.aisites.com/motionDesign/index.html' target='_blank'>here</a> to view.",
							"Javascript Project. Click <a href='http://kiopah.aisites.com/javascriptFinal/index.html' target='_blank'>here</a> to view.",
							"E-Learning module made with Flash. Click <a href='http://kiopah.aisites.com/ethanolExplorer/ethanolExplorer.swf' target='_blank'>here</a> to view.",
							"CSS Project. Click <a href='http://kiopah.aisites.com/stylesheetScripting/index.html' target='_blank'>here</a> to view.",
							"Flash 3 Final Project. Click <a href='http://kiopah.aisites.com/flash3/index.html' target='_blank'>here</a> to view.",
							"The first draft of this site and two alternate versions. Click <a href='portfolios/' target='_blank'>here</a> to view.");
var interactiveExp = "Tying the previous techniques together is the most fun of all.";

var showInteractive = function()
{
	i = 0;
	cat = 5;

	$("homeTitle").innerHTML = '<span class="titleQuote">&quot;</span><span id="titleTitle">I</span>nteractive<span class="titleQuote">&quot;</span>';
	$("titleTitle").style.marginRight = "0px";
	$("topOutlinePortfolio").style.width = "45%";
	$("topOutlinePortfolio").style.left = "29%";
	$("bottomOutlinePortfolio").style.width = "48%";
	$("bottomOutlinePortfolio").style.left = "26%";
	
	$("portfolioBG").style.display = "block";
	$("portfolioBG").src = "images/jacobsLadder.png";
	$("thumbs").style.width = "65%";
	$("thumbs").style.float = "right";
		
	$("explanation").innerHTML = interactiveExp;
	$("thumbs").innerHTML = "";
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "0em -0.4em";
	$("interactiveLink").style.color = "";
		
	while (i < interactiveFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='return showImage(" + i + ")'  id='" + i + "'><img src='" + picturePath + "t_" + interactiveFile[i] + "'/><div class='thumbTitle thumbTitleInteractive'>" + interactiveCaption[i] + "</div></a></div>";
		i++;
	}
	
	$("thumbs").innerHTML += "<h2>Experiments</h2>";
	
	$("thumbs").innerHTML += "<iframe src='stock/images/parallaxTest.swf' class='intFrame'>";
	$("thumbs").innerHTML += "<h3>Parallax Test</h3><p class='expIntDesc'>An interactive animation test attempting a three-dimensional effect. Move your mouse over the window to use.</p>";
	
	$("thumbs").innerHTML += "<iframe src='stock/images/exp_interactive2.html' class='intFrame'>";
	$("thumbs").innerHTML += "<h3>Calculator</h3><p class='expIntDesc'>An experiment to work with some of the various built-in math functions in Javascript. Enter an X and Y value and click Calculate to find your answers.</p>";
	
	return false;
}

var interactiveOver = function()
{
	$("interactiveLink").style.backgroundPosition = "0em -0.4em";
	$("interactiveSelect").style.background = "rgba(50,50,80,0.9)";
	
	/*$("interactiveSelect").style.width = "200px";
	$("interactiveSelect").style.height = "200px";
	$("interactiveSelect").style.marginLeft = "";
	$("interactiveSelect").style.marginRight = "-25px";
	$("interactiveSelect").style.marginTop = "-25px";
	
	$("designSelect").style.width = "140px";
	$("designSelect").style.height = "140px";
	$("photographySelect").style.width = "140px";
	$("photographySelect").style.height = "140px";
	$("videoSelect").style.width = "140px";
	$("videoSelect").style.height = "140px";
	$("audioSelect").style.width = "140px";
	$("audioSelect").style.height = "140px";
	
	$("thumbs").style.marginBottom = "-25px";*/
}

var interactiveOut = function()
{
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveSelect").style.background = "";
	
	$("designSelect").style.width = "";
	$("designSelect").style.height = "";
	$("interactiveSelect").style.marginLeft = "";
	$("interactiveSelect").style.marginRight = "";
	$("interactiveSelect").style.marginTop = "";
	
	$("photographySelect").style.width = "";
	$("photographySelect").style.height = "";
	$("audioSelect").style.width = "";
	$("audioSelect").style.height = "";
	$("videoSelect").style.width = "";
	$("videoSelect").style.height = "";
	$("interactiveSelect").style.width = "";
	$("interactiveSelect").style.height = "";
	
	$("thumbs").style.marginBottom = "";
}

//DISPLAY FULL SIZED IMAGE
var thisPic;
var curNumPic;

var showImage = function(i)
{
	setFlicker = setInterval(flicker, 33);
	$("blackout").style.visibility = "visible";
	$("blackout").style.width = "100%";
	$("blackout").style.height = "100%";
	$("blackout").style.opacity = "1";
	$("imageHolder").style.visibility = "visible";
	$("imageHolder").style.opacity = "1";
	
	$("loading").style.display = "inline";
	$("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	
	if (cat == 1) //design
	{
		//$("blackout").style.backgroundColor = "rgba(100, 50, 50, 0.9)";
		$("currentImage").src = picturePath + designFile[i];
		thisPic = i;
		$("caption").innerHTML = designCaption[i];
		$("description").innerHTML = designDesc[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + designFile.length;
		//alert(i);
	}
	else if (cat == 2) //photog
	{
		//$("blackout").style.backgroundColor = "rgba(100, 100, 50, 0.9)";
		$("currentImage").src = picturePath + photogFile[i];
		$("caption").innerHTML = photogCaption[i];
		$("description").innerHTML = photogDesc[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + photogFile.length;
		thisPic = i;
	}
	/*else if (cat == 4) //vid
	{
		$("currentImage").src = videoFile[i];
		$("caption").innerHTML = videoCaption[i];
		$("description").innerHTML = videoDesc[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + videoFile.length;
		thisPic = i;
	}*/
	else if (cat == 5) //interactive
	{
		//$("blackout").style.backgroundColor = "rgba(50, 50, 80, 0.9)";
		$("currentImage").src = picturePath + interactiveFile[i];
		$("caption").innerHTML = interactiveCaption[i];
		$("description").innerHTML = interactiveDesc[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + interactiveFile.length;
		thisPic = i;
	}
	else if (cat == 6) //experimental design
	{
		$("currentImage").src = picturePath + exp_designFile[i];
		$("caption").innerHTML = exp_designCaption[i];
		$("description").innerHTML = exp_designDesc[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + exp_designFile.length;
		thisPic = i;
	}
	else if (cat == 7) //experimental photog
	{
		$("currentImage").src = picturePath + exp_photogFile[i];
		$("caption").innerHTML = exp_photogCaption[i];
		$("description").innerHTML = exp_photogDesc[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + exp_photogFile.length;
		thisPic = i;
	}
	
	return false;
}


var respondImage = function()
{
	$("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	$("loading").style.display = "";
}

var flickInterval;
var flicker = function()
{
	
	flickInterval = Math.random() * 9 + 80;
	
	$("blackout").style.background = "-moz-radial-gradient(center, ellipse cover,  rgba(251,245,218,0) 0%, rgba(85,83,74,0) " + flickInterval + "%, rgba(0,0,0,1) 100%)"; /* FF3.6+ */
	$("blackout").style.background = "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(251,245,218,0.8)), color-stop(" + flickInterval + "%,rgba(85,83,74,0.8)), color-stop(100%,rgba(0,0,0,1)))";
	$("blackout").style.background = "-webkit-radial-gradient(center, ellipse cover,  rgba(251,245,218,0.8) 0%,rgba(85,83,74,0.8) " + flickInterval + "%,rgba(0,0,0,1) 100%)";
	
	$("blackout").style.background = "-o-radial-gradient(center, ellipse cover,  rgba(251,245,218,0.8) 0%,rgba(85,83,74,0.8) " + flickInterval + "%,rgba(0,0,0,1) 100%)"; /* Opera 12+ */
	$("blackout").style.background = "-ms-radial-gradient(center, ellipse cover,  rgba(251,245,218,0.8) 0%,rgba(85,83,74,0.8) " + flickInterval + "%,rgba(0,0,0,1) 100%)"; /* IE10+ */
	$("blackout").style.background = "radial-gradient(ellipse at center,  rgba(251,245,218,0.8) 0%,rgba(85,83,74,0.8) " + flickInterval + "%,rgba(0,0,0,1) 100%)"; /* W3C */
}

var nextPic = function()
{
	thisPic++;

	$("loading").style.display = "inline";
	
	if (cat == 1) //design
	{
		if (thisPic >= designFile.length)
		{
			thisPic = 0;
		}

		$("currentImage").src = picturePath + designFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = designCaption[thisPic];
		$("description").innerHTML = designDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + designFile.length;
	}
	else if (cat == 2) //photog
	{
		if (thisPic >= photogFile.length)
		{
			thisPic = 0;
		}
		
		$("currentImage").src = picturePath + photogFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = photogCaption[thisPic];
		$("description").innerHTML = photogDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + photogFile.length;
	}
	else if (cat == 5) //interactive
	{
		if (thisPic >= interactiveFile.length)
		{
			thisPic = 0;
		}
		
		$("currentImage").src = picturePath + interactiveFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = interactiveCaption[thisPic];
		$("description").innerHTML = interactiveDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + interactiveFile.length;
	}
	else if (cat == 6) //experimental design
	{
		if (thisPic >= exp_designFile.length)
		{
			thisPic = 0;
		}
		
		$("currentImage").src = picturePath + exp_designFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = exp_designCaption[thisPic];
		$("description").innerHTML = exp_designDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + exp_designFile.length;
	}
	else if (cat == 7) //experimental photography
	{
		if (thisPic >= exp_photogFile.length)
		{
			thisPic = 0;
		}
		
		$("currentImage").src = picturePath + exp_photogFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = exp_photogCaption[thisPic];
		$("description").innerHTML = exp_photogDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + exp_photogFile.length;
	}
	
	/* $("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px"; */
	
	return false;
}

var prevPic = function()
{
	thisPic--;
	
	$("loading").style.display = "inline";

	if (cat == 1) //design
	{
		if (thisPic < 0)
		{
			thisPic = designFile.length - 1;
		}
		
		$("currentImage").src = picturePath + designFile[thisPic];
		$("caption").innerHTML = designCaption[thisPic];
		curNumPic = thisPic + 1;
		$("description").innerHTML = designDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + designFile.length;
	}
	else if (cat == 2) //photography
	{
		if (thisPic < 0)
		{
			thisPic = photogFile.length - 1;
		}
		
		$("currentImage").src = picturePath + photogFile[thisPic];
		$("caption").innerHTML = photogCaption[thisPic];
		curNumPic = thisPic + 1;
		$("description").innerHTML = photogDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + photogFile.length;
	}
	else if (cat == 5) //interactive
	{
		if (thisPic < 0)
		{
			thisPic = interactiveFile.length - 1;
		}
		
		$("currentImage").src = picturePath + interactiveFile[thisPic];
		$("caption").innerHTML = interactiveCaption[thisPic];
		curNumPic = thisPic + 1;
		$("description").innerHTML = interactiveDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + interactiveFile.length;
	}
	else if (cat == 6) //experiment design
	{
		if (thisPic < 0)
		{
			thisPic = exp_designFile.length - 1;
		}
		
		$("currentImage").src = picturePath + exp_designFile[thisPic];
		$("caption").innerHTML = exp_designCaption[thisPic];
		curNumPic = thisPic + 1;
		$("description").innerHTML = exp_designDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + exp_designFile.length;
	}
	else if (cat == 7) //experiment photog
	{
		if (thisPic < 0)
		{
			thisPic = exp_photogFile.length - 1;
		}
		
		$("currentImage").src = picturePath + exp_photogFile[thisPic];
		$("caption").innerHTML = exp_photogCaption[thisPic];
		curNumPic = thisPic + 1;
		$("description").innerHTML = exp_photogDesc[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + exp_photogFile.length;
	}
	
	/* $("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px"; */
	
	return false;
}

var closeGallery = function()
{
	$("blackout").style.opacity = "";
	$("imageHolder").style.opacity = "";
	
	setTimeout(closeNice, 750);
}

var closeNice = function()
{
	$("blackout").style.visibility = "";
	$("blackout").style.width = "";
	$("blackout").style.height = "";
	
	$("imageHolder").style.width = "";
	$("imageHolder").style.marginTop = "";
	$("imageHolder").style.marginLeft = "";
	$("imageHolder").style.visibility = "";
	$("imageHolder").style.height = "";
	
	clearInterval(setFlicker);
}