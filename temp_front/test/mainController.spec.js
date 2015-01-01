describe('MainController', function(){
	beforeEach(module('instaClone'));

	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('MainController', {
			$scope: scope
		});
	}));

	it('should initialize with three default items', function() {
		expect(scope.items).toEqual(['Item 1', 'Item 2', 'Item 3']);
	});

	it('should add an <li> to the <ul> when post is clicked', function() {

	});

});


describe('adding an item to list of items displayed on page', function(){

	beforeEach(module('instaClone'));

	var scope, ctrl;

	beforeEach(inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		ctrl = $controller('MainController', {
			$scope: scope
		});
	}));

	var page = require('webpage').create();
	page.open('home.html', function() {
		console.log("phantom of the opera");
		phantom.exit();
	});

});