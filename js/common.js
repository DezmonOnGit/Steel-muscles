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
	$('.dummy').viewportChecker({
	    classToAdd: 'content-instagram-bg-animation_active', // Class to add to the elements when they are visible,
	    repeat: true, // Add the possibility to remove the class if the elements are not visible
	});
});