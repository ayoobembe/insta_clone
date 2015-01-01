angular.module('instaClone', ['flow'])

.controller('MainController',[
	'$scope',
	function($scope){
		$scope.items = ['Item 1', 'Item 2', 'Item 3'];
		$scope.addItem = function() {
			var n = $scope.items.length + 1;
			$scope.items.push('Item ' + n);
		};

		$scope.pictures = [];
		$scope.$on('flow::fileAdded', function(event, $flow, flowFile){
		
		});

	}]);