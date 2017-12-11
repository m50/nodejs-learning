$(function() {
  console.log('dom ready');
  return $('.minimize-button').on('click', function() {
    var parent;
    console.log('click event for minimize-button');
    if ($(this).text() === '[ - ]') {
      $(this).text('[ + ]');
    } else {
      $(this).text('[ - ]');
    }
    parent = $(this).parent().parent().parent();
    return parent.children('.section-body').slideToggle();
  });
});
