$(document).ready(function(){

	function Yesterday(){
		var d = new Date();
		d.setDate(d.getDate() - 1);
		var dd = d.getDate();
		if (dd < 10){
			dd = '0' + dd;
		}
		var mm = d.getMonth() + 1;
		if (mm < 10){
			mm = '0' + mm;
		}
		$('.review-person-date').text( dd + '.' + mm + '.' + d.getFullYear() );
	}
	Yesterday();

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

	$('.more-a').click(function(){
		var el = $(this).attr('href');
		if ( $(el).hasClass('active') ){
			$(el).removeClass('active');
			$(this).text('Подробнее');
		} else {
			$(el).addClass('active');
			$(this).text('Скрыть');
		}
		return false;
	});

});