$(function () {
	$('.checkall').on('click', function () {
		$(this).closest('fieldset').find(':checkbox').prop('checked', this.checked);
	});
});

$(function () {
	$('.England').on('click', function () {
		$(this).closest('fieldset').find('.checkall').prop('checked', false);
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