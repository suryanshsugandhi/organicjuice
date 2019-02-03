//when the user scrolls down 20px from the top, slide up the brand logo to the side of the name
//when the user reaches the top, slide down the brand logo
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	var brandlogo = document.getElementById("brandlogo"),
		brandname = document.getElementById("brandname"),
		navbar = document.getElementById("navbar");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  	$(brandlogo).addClass("after");
  	$(brandlogo).removeClass("before");
  	$(brandlogo).attr('src', 'logo_orange.png');

    $(brandname).addClass("after");
    $(brandname).removeClass("before");

	$(navbar).addClass("after");
	$(navbar).removeClass("before");    
  } else {
  	$(brandlogo).addClass("before");
  	$(brandlogo).removeClass("after");
  	$(brandlogo).attr('src', 'logo_green.png');

    $(brandname).addClass("before");
    $(brandname).removeClass("after");


	$(navbar).addClass("before");
	$(navbar).removeClass("after"); 
  }
} 

$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 20;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})


$(document).ready(function(){
	ScrollReveal().reveal('.customcard', {duration: 1500});
})
