app = angular.module 'MainPage', ['ngRoute']

mainController = ($scope) ->
	$scope.tests = ['test1', 'test2']

app.controller 'MainController', ['$scope', mainController]