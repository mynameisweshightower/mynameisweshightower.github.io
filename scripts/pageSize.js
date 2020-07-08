var headScroll = window.scrollY / 2;

window.onscroll = function()
{
	headScroll = window.scrollY / 2;
	//$("#head-section:before").style.top = (window.scrollTop / 2) + 'px';
	$("#head-section").css('top', headScroll + 'px');
	$("#head-wrapper").css('top', headScroll + 'px');
}

//preload images
$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
	
	var imagePercentage = ((i + 1) / arguments.length) * 100;
	$(".preloader-div").text('Loading pictures.');
	$(".preloader-progress").text(imagePercentage);
	
	if (i == arguments.length - 1)
	{
		console.log('hey');
	}
  }
}

//$.preloadImages("stock/images/photog2.jpg","stock/images/photog3.jpg");
$.preloadImages('stock/images/web1.png', 'stock/images/web2.png', 'stock/images/web3.png', 'stock/images/web4.png', 'stock/images/web5.png', 'stock/images/play.png', "stock/images/pause.png", 'stock/images/expdesign2.jpg', 'stock/images/design6.jpg', 'stock/images/expdesign4.jpg', 'stock/images/expdesign5.jpg', 'stock/images/expdesign8.jpg', 'stock/images/design1.jpg', 'stock/images/photog1.jpg', 'stock/images/photog2.jpg', 'stock/images/photog3.jpg', 'stock/images/photog4.jpg', 'stock/images/photog5.jpg');
// end preload images

// preload video
$.preloadVideo = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<video />").attr("src", arguments[i]);
	
	var videoPercentage = ((i + 1) / arguments.length) * 100;

	var imagePercentage = ((i + 1) / arguments.length) * 100;
	$(".preloader-div").text('Loading video.');
	$(".preloader-progress").text(imagePercentage);
	
	if (i == arguments.length - 1)
	{
		console.log('hey');
		$('#preloader-holder').addClass('page-loaded');
		setTimeout(function(){$("#preloader-holder").css({'display':'none'})}, 1200);
	}
  }
}

$.preloadVideo("stock/video/video1.mp4", "stock/video/video2.mp4", "stock/video/video3.mp4");
// end preload video

$("#nav-head").on('click', function(){
	$('html, body').animate({
		scrollTop: 0
	}, 1000);
});

$("#nav-home").on('click', function(){
	$('html, body').animate({
		scrollTop: $("#home-section").offset().top
	}, 1000);
});

$("#nav-skills").on('click', function(){
	$('html, body').animate({
		scrollTop: $("#skills-section").offset().top
	}, 1000);
});

$("#nav-works").on('click', function(){
	$('html, body').animate({
		scrollTop: $("#work-section").offset().top
	}, 1000);
});

$("#nav-samples").on('click', function(){
	$('html, body').animate({
		scrollTop: $("#samples-section").offset().top
	}, 1000);
});

$("#nav-contact").on('click', function(){
	$('html, body').animate({
		scrollTop: $("#contact-section").offset().top
	}, 1000);
});