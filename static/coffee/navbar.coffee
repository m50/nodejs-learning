goto = (url) -> window.location.replace(url)

$('.narrownav').children('i').on "click", ->
	$('.narrownav').children('.navitems').slideToggle()