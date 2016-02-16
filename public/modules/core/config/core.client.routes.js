'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('accommodations', {
			url: '/accommodations',
			templateUrl: 'modules/core/views/accommodations.client.view.html'
		}).
		state('details', {
			url: '/details',
			templateUrl: 'modules/core/views/details.client.view.html'
		}).
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
	}
]);