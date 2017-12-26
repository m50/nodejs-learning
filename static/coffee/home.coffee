app = angular.module 'HomePage', []

main = ($scope) ->
	$scope.tests = ['test1', 'test2']

app.controller 'MainController', ['$scope', main]