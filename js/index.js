$(document).ready(function(){

	$('.b-2-slider').slick({
		dots: true,
		arrows: false,
		slidesToShow: 3,
		autoplay: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

});