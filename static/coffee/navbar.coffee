goto = (url) -> window.location.replace(url)

# .children('i')

$('.narrownav').click ->
	console.log('toggling navitems')
	$('.narrownav').children('.navitems').slideToggle()