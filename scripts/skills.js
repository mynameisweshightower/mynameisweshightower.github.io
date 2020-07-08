var skillHtmlLeft;
$("#skills-box").on('mousemove', function(){
	sillHtmlLeft = event.pageX - $("#skills-box").offset().left;
	console.log(event.pageX - $("#skills-box").offset().left);
	$("#skills-box").css({'left':skillHtmlLeft + '%'});
});

/* ------------------------------------

x = cos(z)
y= sin(z)
theta = ?

r = (5 cos(theta), theta - 2, -5 sin(theta))
y = theta - 2
  = theta = y + 2
x = 5 cos(y + 2)
z = -5 sin(y+2)

helix?
------------------------------------ */