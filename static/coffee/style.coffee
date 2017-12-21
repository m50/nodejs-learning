$ ->
  styleNode = $('#deferred-styles')
  replacement = document.createElement 'div'
  replacement.innerHTML = styleNode.html()
  $('body').append(replacement)
  styleNode.html('')