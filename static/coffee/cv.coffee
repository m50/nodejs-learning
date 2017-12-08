$ ->
	$('.minimize-button').on 'click' ->
		if $(this).text() == '[ - ]'
			$(this).text('[ + ]')
		else
			$(this).text('[ - ]')
		parent = $(this).parent().parent()
		parent.children('.sectionbody').slideToggle()
