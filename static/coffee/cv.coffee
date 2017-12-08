$(document).ready(() => {

$('.minimize-button').on('click', function () {
	console.log($(this).text());
	if($(this).text() == '[ - ]') {
		$(this).text('[ + ]');
	} else {
		$(this).text('[ - ]');
	}
	let parent = $(this).parent().parent();
	parent.children('.sectionbody').slideToggle();
});

});

$ ->
	$('.minimize-button').on 'click' ->
		if $(this).text() == '[ - ]'
			$(this).text('[ + ]')
		else
			$(this).text('[ - ]')
		parent = $(this).parent().parent()
		parent.children('.sectionbody').slideToggle()
