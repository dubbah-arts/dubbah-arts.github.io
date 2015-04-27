//========================
// CHARGEUR
//========================
$(window).load(function() { // s'assurer que la page est chargée en entier
	$('#status').fadeOut(); // faire un fondu de l'animation lors du chargement 
	$('#preloader').delay(350).fadeOut('slow');
    // fade out le div blanc qui couvre la page
	$('body').delay(350).css({'overflow':'visible'});
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
  $('a[href*=#]:not([href=#])').click(function( ) {
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