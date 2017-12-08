goto = (url) -> window.location.replace(url)

$('.narrownav').child('i').on "click". ->
	$('.narrownav').child('.navitems').slideToggle()