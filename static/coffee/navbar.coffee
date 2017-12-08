goto = (url) -> window.location.replace(url)

$('.narrownav').children('i').click ->
	console.log('toggling navitems')
	$('.narrownav').children('.navitems').slideToggle()