$ ->
	$('.postheader').on 'click', ->
		window.location.replace('/blog/'+$(this).parent().attr('key'))