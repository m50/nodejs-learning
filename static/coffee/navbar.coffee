goto = (url) -> window.location.href = url

$ ->
	$('#navexpand').on "click", ->
		$('.narrownav').children('.navitems').slideToggle()

	lastScrollPos = 0;

	$(window).on "scroll", ->
		if $(window).width() >= 768 
			if $(this).scrollTop() > ($('#header').height() - 10)
				$('.navbar').addClass('fixed')
				$('#body').css('margin-top', $('.navbar').height() + 10)
			else
				$('.navbar').removeClass('fixed')
				$('#body').css('margin-top', 10)
		else
			$('.navbar').addClass('fixed')
			$('#body').css('margin-top', $('.navbar').height() + 10)
			if $(this).scrollTop() > 150
				if $(this).scrollTop() > lastScrollPos
					$('.navbar').slideUp()
				else
					$('.navbar').slideDown()
		lastScrollPos = $(this).scrollTop()
