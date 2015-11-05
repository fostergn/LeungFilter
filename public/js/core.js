angular.module('leungApp', ['mainController', 'drawingService', 'ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider

			//home page
			.when('/', {
				templateUrl : 'home.html',
				controller : 'homeCtrl'
			})

			.when('/tag/:tag', {
				templateUrl : 'tags.html',
				controller : 'tagCtrl'
			})

			.when('/item/:id', {
				templateUrl : 'item-view.html',
				controller : 'itemCtrl'
			})

			.when('/full/:id', {
				templateUrl : 'sub-item-view.html',
				controller : 'subItemCtrl'
			});

			//set our app to have pretty URLs
			$locationProvider.html5Mode(true);
	});