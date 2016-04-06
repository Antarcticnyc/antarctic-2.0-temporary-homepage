//when mouseenter on .trigger, make the z-index of triger lower than footer and do the translate
// when mouseleaves footer remove the translate (via class?) and remove the z-index modifier for the trigger

$(document).ready(function(){
	$('footer').hover(
		function(){
		$('.desktop .container').addClass('translated');		
		},
		function(){
		$('.desktop .container').removeClass('translated');
		// console.log('left');
		}
	);

	//background swapper
	$('.desktop .overlay > div').hover(function(){
		//console.log('hovering over' + $(this).attr('class'));
		$('.inner').attr("fill", "url(#" + $(this).attr('class') + ")");
	});

	//mobile social menu expand/close
	$('.mobile.landing').click(function(){
		if ($(this).hasClass("expanded")) {
			$('.mobile').toggleClass('translated');
			$(this).removeClass("expanded");
		}
	});

	$('.mobile #social-link').click(function(){
		event.preventDefault();
		if (!$('.mobile.landing').hasClass("expanded")) {
			$('.mobile').toggleClass('translated');
			setTimeout(function(){
				$('.mobile.landing').addClass('expanded');
			}, 400);
		}
	});

});
