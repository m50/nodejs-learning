app = angular.module 'HomePage', ['ngRoute']

main = ($scope, $route) ->
	$scope.$route = $route

home = ($scope) ->
	$scope.tests = ['test1', 'test2']

page2 = ($scope) ->
	$scope.tests = ['test3', 'test4']

app.controller 'MainController', ['$scope', '$route', main]
app.controller 'HomeController', ['$scope', home]
app.controller 'Page2Controller', ['$scope', page2]

app.config ($routeProvider, $locationProvider) ->
	$routeProvider
		.when '/',
			controller: 'HomeController',
			templateUrl: 'views/html/angular/HomePage.html'
		.when '/page2',
			controller: 'Page2Controller',
			templateUrl: 'views/html/angular/Page2.html'
		.otherwise
			redirectTo: '/'
	$locationProvider.html5Mode true