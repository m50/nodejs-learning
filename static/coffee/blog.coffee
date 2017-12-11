$ ->
	$('.postheader').on 'click', ->
		console.log($(this).parent().attr('key'));
		window.location.replace('/blog/'+$(this).parent().attr('key'))