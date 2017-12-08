goto = (url) -> window.location.href = url

$('#navexpand').on "click", ->
	$('.narrownav').children('.navitems').slideToggle()

$(window).on "scroll", ->
	console.log('scrolling...')
	if $(window).width() >= 768 
		if this.scrollTop > 50
			$('.navbar').addClass('fixed')
		else
			$('.navbar').removeClass('fixed')
	else
		if this.scrollTop > 50
			$('.navbar').scrollUp()
		else
			$('.navbar').scrollDown()
