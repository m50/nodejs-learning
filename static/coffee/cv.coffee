$ ->
	$('.minimize-button').on 'click', ->
		console.log($(this).text())
		if $(this).text() == '[ - ]'
			$(this).text('[ + ]')
		else
			$(this).text('[ - ]')
		parent = $(this).parent().parent().parent()
		parent.children('.section-body').slideToggle()
