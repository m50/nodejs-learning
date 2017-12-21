$ ->
  styleNode = $('#deferred-styles')
  replacement = document.createElement 'div'
  replacement.innerHTML = styleNode.html()
  $(document).append(replacement)
  styleNode.html('')