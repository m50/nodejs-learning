$(document).ready(() => {

$('p').on('click', () => {
	$(this).text = "JQuery changed this!";
	console.log('JQuery on click');
});

});
