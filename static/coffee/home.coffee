app = angular.module 'MainPage', ['ngRoute']

app.config ($routeProvider) ->
	$routeProvider
		.when '/',
			controller: 'HomeController',
			templateUrl: '/views/html/angular/HomePage.html'
		.when '/page2',
			controller: 'Page2Controller',
			templateUrl: '/views/html/angular/Page2.html'
		.otherwise
			redirectTo: '/'

main = ($scope) ->
	$scope.tests = ['test1', 'test2']

page2 = ($scope) ->
	$scope.tests = ['test3', 'test4']

app.controller 'MainController', ['$scope', main]
app.controller 'Page2Controller', ['$scope', page2]