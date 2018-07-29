$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
  	items: 3,
  	loop: true,
  	nav: true,
  	dots: true,
  });
	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});
});