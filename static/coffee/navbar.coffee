goto = (url) -> window.location.href = url

$('#navexpand').on "click", ->
	$('.narrownav').children('.navitems').toggle()