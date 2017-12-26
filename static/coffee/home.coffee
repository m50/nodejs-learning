app = angular.module 'HomePage', []

main = ($scope) ->
	$scope.tests = [
					'This is my website! It is where I test different web technologies to build my site.', 
					'The backend is NGINX Reverse-Proxying to NodeJS. All the pages are built in pug, and each page was a different learning things.',
					'Home Page: (This one) I am utilizing AngularJS 1.6.',
					'CV: First page I ever utilized JQuery.',
					'URL Shortener: Utilizing Redis and implemented Forms using NodeJS. It was my first NodeJS web-app.',
					'Blog: Utilizing React for the front-end, and a RESTful API for the backend, the blog stores data in a PostgreSQL Database, and was my second web-app.',
					'Hidden Pages: There are hidden pages as well, that I utilized when following tutorials to learn new things, but they aren\'t necessarily things I made.'
				]

app.controller 'MainController', ['$scope', main]