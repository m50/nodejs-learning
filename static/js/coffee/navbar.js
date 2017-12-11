var goto;

goto = function(url) {
  return window.location.href = url;
};

$(function() {
  var lastScrollPos;
  $('#navexpand').on("click", function() {
    return $('.narrownav').children('.navitems').slideToggle();
  });
  lastScrollPos = 0;
  if ($(window).width() < 768) {
    $('.navbar').addClass('fixed');
    $('#body').css('margin-top', $('.navbar').height() + 25);
  }
  $(window).on("scroll", function() {
    if ($(window).width() >= 768) {
      if ($(this).scrollTop() > ($('#header').height() - 25)) {
        $('.navbar').addClass('fixed');
        $('#body').css('margin-top', $('.navbar').height() + 25);
      } else {
        $('.navbar').removeClass('fixed');
        $('#body').css('margin-top', 25);
      }
    } else {
      if ($(this).scrollTop() > 150) {
        if ($(this).scrollTop() > lastScrollPos) {
          $('.navbar').slideUp();
        } else {
          $('.navbar').slideDown();
        }
      }
    }
    return lastScrollPos = $(this).scrollTop();
  });
  return $('.navitems').children('.navitem').each(function() {
    if ($('#header').children('h1').text() === $(this).text()) {
      return $(this).addClass('active');
    }
  });
});
