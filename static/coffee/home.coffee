app = angular.module 'MainPage', ['ngRoute']

mainController = ($scope, $routeParams) ->
	$scope.tests = ['test1', 'test2', $routeParams.test]

app.controller 'MainController', ['$scope', '$routeParams', mainController]