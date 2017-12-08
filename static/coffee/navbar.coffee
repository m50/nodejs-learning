goto = (url) -> window.location.href = url

$('.narrownav').children('i').on "click", ->
	$('.narrownav').children('.navitems').slideToggle()