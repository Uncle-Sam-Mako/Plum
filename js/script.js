//Preloader
$(document).ready(function(){
	$('#loader').hide();
	//ancre-fluide
});

$('a[href^="#"]').on('click', function(e){
	e.preventDefault();
	let link = $(this).attr('href'),
	elem = $(link);
	if(elem.length){
		let elemTop = elem.first().offset().top;
		$('html, body').animate({
			scrollTop: elemTop
		}, "fast");
	}
});

