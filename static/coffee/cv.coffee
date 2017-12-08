$ ->
	console.log('dom ready')
	$('.minimize-button').on 'click', ->
		console.log('click event for minimize-button')
		if $(this).text() == '[ - ]'
			$(this).text('[ + ]')
		else
			$(this).text('[ - ]')
		parent = $(this).parent().parent().parent()
		parent.children('.section-body').slideToggle()
