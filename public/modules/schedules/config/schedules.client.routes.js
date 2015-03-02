'use strict';

// Setting up route
angular.module('schedules').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');
	
		// Schedule state routing
		$stateProvider.
		state('schedule', {
			url: '/schedule',
			templateUrl: 'modules/schedules/views/schedule.client.view.html'
		});

	}
]);
