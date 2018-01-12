app = angular.module('HomePage', []);

app.component('informationSection', {
	templateUrl: '/views/html/section.html',
	bindings: {
		details: '='
	}
});

app.controller('MainController', ['$scope', ($scope) => {
	$scope.sections = [
					{title: 'Home Page', content: 'I am utilizing AngularJS 1.6.'},
					{title: 'CV', content: 'First page I ever utilized JQuery.'},
					{title: 'URL Shortener', content: 'Utilizing Redis and implemented Forms using NodeJS. It was my first NodeJS web-app.'},
					{title: 'Blog', content: 'Utilizing React for the front-end, and a RESTful API for the backend, the blog stores data in a PostgreSQL Database, and was my second web-app.'},
					{title: 'Hidden Pages', content: 'There are hidden pages as well, that I utilized when following tutorials to learn new things, but they aren\'t necessarily things I made.'}
				];
}]);