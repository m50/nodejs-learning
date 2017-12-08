goto = (url) -> window.location.href = url

$('#navexpand').on "click", ->
	$('.narrownav').children('.navitems').slideToggle()

$(window).on "scroll", ->
	console.log('scrolling... ' + $(this).scrollTop())
	if $(window).width() >= 768 
		if $(this).scrollTop() > ($('#header').height() - $('.navbar').height())
			$('.navbar').addClass('fixed')
		else
			$('.navbar').removeClass('fixed')
	else
		if $(this).scrollTop() > 200
			$('.navbar').scrollUp()
		else
			$('.navbar').scrollDown()
