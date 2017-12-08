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
		if $(this).scrollTop() < lastScrollPos
			$('.navbar').slideDown()
		else
			$('.navbar').slideUp()
	lastScrollPos = $(this).scrollTop()
