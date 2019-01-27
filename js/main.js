$(document).ready(function(){

	var ss = sessionStorage.getItem('site');
	if ( ss ) {
		$('.cookie').removeClass('active');
	} else {
		sessionStorage.setItem('site','true');
		$('.cookie').addClass('active');
	}
	
	$('.cookie-btn').click(function(){
		$('.cookie').removeClass('active');
	});

	$('.radio-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
		} else {
			$(this).removeClass('error');
			$(this).addClass('active');
		}
	});

	$('.fancybox').fancybox();
	$('input[type="tel"]').inputmask('+7 (999)-999-99-99');

	function Selects() {
		$('.select-wrap').each(function(){
			var text = $(this).find('select option:selected').text();
			$(this).find('select option').each(function(){
				$(this).parents('.select-wrap').find('.select-drop').append('<a href=".'+$(this).attr('class')+'">'+$(this).text()+'</a>');
			});
			//$(this).find('.select-area span').text(text);
		});
	}
	Selects();

	$('.select-area').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parent().find('.select-drop').removeClass('active');
		} else {
			$('.select-area').removeClass('active');
			$('.select-drop').removeClass('active');
			$(this).addClass('active');
			$(this).parent().find('.select-drop').addClass('active');
		}
	});
	$('body').on('click','.select-drop a',function(){
		var text = $(this).text();
		var opt = $(this).attr('href');

		$(this).parents('.select-wrap').find('.select-area span').text(text);
		$(this).parents('.select-wrap').find(opt).prop('selected','true').change();
		$(this).parents('.select-wrap').find('.select-drop').removeClass('active');
		$(this).parents('.select-wrap').find('.select-area').removeClass('active');
		return false;
	});
	$('body').on('click',function(e){
		var container = $('.select-wrap');
		if (container.has(e.target).length === 0) {
			$('.select-drop').removeClass('active');
			$('.select-area').removeClass('active');
		}
	});

	$('.form-btn').click(function(){
		var el = $(this).attr('href');
		var validInput = true;
		var validText = true;
		$(this).parents('.step').find('input').each(function(){
			if ( !$(this).val().length ){
				$(this).addClass("error");
				if ( validInput ){
					validInput = false;
				}
			}
		});
		$(this).parents('.step').find('textarea').each(function(){
			if ( !$(this).val().length ){ 
				$(this).addClass("error");
				if ( validText ){
					validText = false;
				}
			}
		});
		if ( validInput && validText ){
			$(this).parents('form').find('.step').removeClass('active');
			$(this).parents('form').find(el).addClass('active');
		}
		return false;
	});

	$('input').on('input',function(){
		$(this).removeClass('error');
	});
	$('textarea').on('input',function(){
		$(this).removeClass('error');
	});

	$('form button[type="submit"]').click(function(){
		if ( $(this).parents('form').find('.button-text .radio-btn').hasClass('active') ) {
			$(this).parents('form').find('input').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
			$(this).parents('form').find('textarea').each(function(){
				if(!$(this).val().length) { 
					event.preventDefault(); 
					$(this).addClass("error"); 
				} else { 
					$(this).removeClass("error"); 
				} 
			});
		} else {
			$(this).parents('form').find('.button-text .radio-btn').addClass('error');
			event.preventDefault();
		}
	});

});