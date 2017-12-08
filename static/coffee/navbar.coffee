goto = (url) -> window.location.replace(url)

$('.narrownav').children('.fr').click ->
	console.log('toggling navitems')
	$('.narrownav').children('.navitems').slideToggle()