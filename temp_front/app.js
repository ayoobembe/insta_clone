angular.module('instaClone', [])

.controller('MainController',[
	'$scope',
	function($scope){
		$scope.items = ['Item 1', 'Item 2', 'Item 3'];
		$scope.addItem = function() {
			var n = $scope.items.length + 1;
			$scope.items.push('Item ' + n);
		};
	}]);