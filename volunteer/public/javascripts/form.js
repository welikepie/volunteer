$(document).ready(function(){
    $('ul').addClass('hidden');
});

// Check all checkpoints

$(function () {
	$('.checkall').on('click', function () {
		$(this).closest('ul').find(':checkbox').prop('checked', this.checked);
	});
});

// Uncheck the "check all" checkpoint if one of the regions are unchecked

$(function () {
	$('.England').on('click', function () {
		$(this).closest('ul').find('.checkall').prop('checked', false);
	});
});

$(function () {
	$('.Northern_Ireland').on('click', function () {
		$(this).closest('ul').find('.checkall').prop('checked', false);
	});
});

$(function () {
	$('.Scotland').on('click', function () {
		$(this).closest('ul').find('.checkall').prop('checked', false);
	});
});

$(function () {
	$('.Wales').on('click', function () {
		$(this).closest('ul').find('.checkall').prop('checked', false);
	});
});


// Hide/UnHide blocks

$(function () {
	$('.name').on('click', function () {
		if($(this).siblings('ul').hasClass('hidden')) {

		$('li').closest('ul').addClass('hidden');
		$(this).siblings('ul').toggleClass('hidden');

		} else {
			$(this).siblings('ul').toggleClass('hidden');
		}
	});
});

// disabled is HTML5 only, not supported in IE9 <
/* $('.submit').click( function(e) {
		e.preventDefault();
		$('#error').slideUp();
		$('.submit').attr('disabled', true);
		if($('#JS-EMAIL').val().match(/^\S+@\S+\.\S+$/) && $('#input-email').val() != 'your@email.com' ) {
			$('#error').html('<p class="error">Thanks for signing up!</p>');
			$('#error').slideDown();

		}  else {
			$('#error').html('<p class="error">Please enter a valid email address.</p>');
			$('#error').slideDown();
		}
	});

*/