app = angular.module 'MainPage', ['ngRoute']

app.config ($routeProvider) ->
  $routeProvider
  	.when '/', 
    	controller: 'MainController' #,
    	# templateUrl: 'views/home.html'
  	.when '/:id',
    	controller: 'MainController' #,
    	# templateUrl: 'views/photo.html'
  	.otherwise
    	redirectTo: '/'

mainController = ($scope, $routeParams) ->
	$scope.tests = ['test1', 'test2', $routeParams.test]

app.controller 'MainController', ['$scope', '$routeParams', mainController]