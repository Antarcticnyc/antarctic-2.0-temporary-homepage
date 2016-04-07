//when mouseenter on .trigger, make the z-index of triger lower than footer and do the translate
// when mouseleaves footer remove the translate (via class?) and remove the z-index modifier for the trigger

$(document).ready(function(){
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
	$('.desktop .leadership-link').click(function(){
		event.preventDefault();
		var newH = $('.scrollable .topper').height() + $('.leadership').height();
		$('.scrollable').velocity({height: newH}, 600);
		$('.leadership').velocity({
			top:0
		}, {
			duration:600,
			complete: function(){
				// $(this).css('position','relative');
				$('.homepage').css('display', 'none');
				$(this).removeClass('unloaded');
			}
		});

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
