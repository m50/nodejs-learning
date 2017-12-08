goto = (url) -> window.location.replace(url)

$('.narrownav').children('i').on "click", ->
	console.log('toggling navitems')
	$('.narrownav').children('.navitems').slideToggle()

$('h1').on "click", ->
	console.log("nav click")