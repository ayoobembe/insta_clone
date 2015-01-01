angular.module('instaClone', [])

.controller('MainController',[
	'$scope',
	function($scope){
		$scope.items = ['Item 1', 'Item 2', 'Item 3'];
	}]);