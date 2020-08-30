
//Preloader
$(document).ready(function(){
	$('#loader').hide();
});

//ancre-fluide
// $('a[href^="#"]').on('click', function(e){
// 	let link = $(this).attr('href'),
// 	elem = $(link);
// 	if(elem.length){
// 		let elemTop = elem.first().offset().top;
// 		$('html, body').animate({
// 			scrollTop: elemTop
// 		}, "fast");
// 	}
// });

ScrollReveal({ distance: '60px'},{duration : 1500});
ScrollReveal().reveal('.fromTop', {delay: 600, origin: 'top' }); 
ScrollReveal().reveal('.fromRight', {delay: 1000, origin: 'right'});
ScrollReveal().reveal('.fromBottom', {delay: 1200, origin: 'bottom'});
ScrollReveal().reveal('.fromLeft', {delay: 1500, origin: 'left'});

//Bouton retour vers le haut

 $(document).ready(function() {
	var duration = 500;
	$(window).scroll(function() {
	if ($(this).scrollTop() > 200) {
		$('.navbarSticky').fadeIn(duration);
	} else {
		$('.navbarSticky').fadeOut(duration);
	}
	});
				
	$('.cRetour').click(function(event) {
		event.preventDefault();
	$('html, body').animate({scrollTop: 0}, duration);
	return false;
	})
});


