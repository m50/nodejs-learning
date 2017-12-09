goto = (url) -> window.location.href = url

$ ->
	$('#navexpand').on "click", ->
		$('.narrownav').children('.navitems').slideToggle()

	lastScrollPos = 0;

	if $(window).width() < 768
		$('.navbar').addClass('fixed')
		$('#body').css('margin-top', $('.navbar').height() + 25)

	$(window).on "scroll", ->
		if $(window).width() >= 768 
			if $(this).scrollTop() > ($('#header').height() - 25)
				$('.navbar').addClass('fixed')
				$('#body').css('margin-top', $('.navbar').height() + 25)
			else
				$('.navbar').removeClass('fixed')
				$('#body').css('margin-top', 25)
		else
			if $(this).scrollTop() > 150
				if $(this).scrollTop() > lastScrollPos
					$('.navbar').slideUp()
				else
					$('.navbar').slideDown()
		lastScrollPos = $(this).scrollTop()

	$('.navitems').children('.navitem').each ->
		if $('#header').children('h1').text() == $(this).text()
			$(this).css('color', 'white')