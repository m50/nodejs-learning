goto = (url) -> window.location.href = url

$('#navexpand').on "click", ->
	$('.narrownav').children('.navitems').slideToggle()

navbar = $('.navbar')

navbar.on "scroll", ->
	if this.scrollTop > 50
		navbar.addClass('fixed')
	else
		navbar.removeClass('fixed')