$(function () {
	$('.checkall').on('click', function () {
		$(this).closest('fieldset').find(':checkbox').prop('checked', this.checked);
	});
});

$(function () {
	$('.checkbox').on('click', function () {
		$(this).closest('fieldset').find('.checkall').prop('checked', false);
	});
});