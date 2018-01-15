app = angular.module('HomePage', []);

app.component('informationSection', {
	templateUrl: '/views/html/section.html',
	bindings: {
		details: '='
	}
});

app.controller('MainController', ['$scope', ($scope) => {
	$scope.sections = [
		{
			title: 'Home Page', 
			content: 'I am utilizing AngularJS 1.6. Each of these entries are in a Javascript Array, and are rendered out using an html template'
		},
		{
			title: 'CV', 
			content: 'First page I ever utilized JQuery on.'
		},
		{
			title: 'URL Shortener', 
			content: 'Utilizing Redis for the database, it was my first NodeJS web-app.'
		},
		{
			title: 'Blog', 
			content: 'Utilizing React for the front-end, and a RESTful API for the backend, the blog stores data in a PostgreSQL Database, and was my second web-app.'
		}
	];
}]);