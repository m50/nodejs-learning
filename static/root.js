$(document).ready(() => {

$('p').on('click', function () {
	console.log($(this).text);
	$(this).text("JQuery changed this! " + $(this).text());
	console.log('JQuery on click');
});

});
