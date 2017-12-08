goto = (url) -> window.location.href = url

$('#navexpand').on "click", ->
	$('.narrownav').children('.navitems').slideToggle()

lastScrollPos = 0;

$(window).on "scroll", ->
	if $(window).width() >= 768 
		if $(this).scrollTop() > ($('#header').height() - 10)
			$('.navbar').addClass('fixed')
		else
			$('.navbar').removeClass('fixed')
	else
		$('.navbar').addClass('fixed')
		if $(this).scrollTop() > 50
			if $(this).scrollTop() > lastScrollPos
				$('.navbar').slideUp()
			else
				$('.navbar').slideDown()
	lastScrollPos = $(this).scrollTop()
