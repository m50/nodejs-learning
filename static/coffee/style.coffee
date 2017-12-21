$ ->
  styleNode = $('#deferred-styles')
  replacement = document.createElement 'div'
  replacement.innerHTML = styleNode[0].textContent;
  $('body').append(replacement)
  styleNode.html('')