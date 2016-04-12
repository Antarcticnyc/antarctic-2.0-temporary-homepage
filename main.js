//when mouseenter on .trigger, make the z-index of triger lower than footer and do the translate
// when mouseleaves footer remove the translate (via class?) and remove the z-index modifier for the trigger

$(document).ready(function(){

	//copy the leadership section to the mobile site
	$('.desktop .leadership .wrapper').clone().appendTo('.mobile.leadership');

	//change color for link on every click
	$('a').click(function(){
		$(this).toggleClass('clicked');
	});

	//footer display
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


	//transition to show leadership page
	$('.desktop .leadership-link').click(function(event){
		event.preventDefault();
		var newH = $('.scrollable .topper').height() + $('.scrollable .leadership').height();
		$('.scrollable').velocity({height: newH}, 600);
		$('.leadership').velocity({
			top:0
		}, {
			duration:600,
			complete: function(){
				// $(this).css('position','relative');
				// $('.homepage').css('display', 'none');
				// $(this).removeClass('unloaded');
			}
		});
	});

	$('.leadership .close-arrow').click(function(event){
		event.preventDefault();
		$('.scrollable').velocity("reverse", 700);
		$('.leadership').velocity("reverse",700);
		$('a').removeClass('clicked');
	});

	//mobile social menu expand/close
	//expanded class is placed when the expansion animation is done - to avoid instand contraction on touch
	$('.mobile.landing, .mobile.leadership').click(function(event){
		if ($('.device').hasClass("expanded")) {
			$('.device').toggleClass('translated');
			$('.device').removeClass("expanded");
			$('#social-link').removeClass("clicked");
		}
	});

	$('.mobile #social-link').click(function(event){
		event.preventDefault();
		if (!$('.device').hasClass("expanded")) {
			$('.device').toggleClass('translated');
			setTimeout(function(){
				$('.device').addClass('expanded');
			}, 400);
		}
	});

	$('.mobile .leadership-link').click(function(event){
		event.preventDefault();
		if(!$('.mobile.leadership').hasClass("translated")) {
			$(this).html("go back");
		} else {
			$(this).html("Senior Leadership");
		}
		$('.mobile.leadership').toggleClass('translated');
	});

}); //end of document.ready
