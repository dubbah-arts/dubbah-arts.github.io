//========================
// CHARGEUR
//========================
$(window).load(function() { // s'assurer que la page est chargée en entier
	$('#status').fadeOut(); // faire un fade out lors de l'animation de chargement 
	$('#preloader').delay(350).fadeOut('slow');
    // fade out le div blanc qui couvre la page
	$('body').delay(350).css({'overflow':'visible'});

	//========================
	// PORTOFLIO
	//========================
		document.getElementById('links').onclick = function (event) {
		    event = event || window.event;
		    var target = event.target || event.srcElement,
		        link = target.src ? target.parentNode : target,
		        options = {index: link, event: event},
		        links = this.getElementsByTagName('a');
		    blueimp.Gallery(links, options);
		};

})





//========================
// SCROLLBAR PERSONALISEE
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});


//========================
// DOUX SCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//========================
// ICON: EFFET HOVER
//========================
$('#services img').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') })