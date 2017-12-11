$ ->
	console.log('boop')
	$('.postheader').on 'click', ->
		console.log($(this).parent().attr('key'));
		window.location.replace('/blog/'+$(this).parent().attr('key'))
	$('.posttitle').on 'click', ->
		console.log($(this).parent().attr('key'));
		window.location.replace('/blog/'+$(this).parent().attr('key'))