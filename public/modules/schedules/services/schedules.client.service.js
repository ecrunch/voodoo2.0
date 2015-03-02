'use strict';

//Schedules service used for communicating with the schedules REST endpoints
angular.module('schedules').factory('Schedules', ['$resource',
	function($resource) {
		return $resource('schedules/:scheduleId', {
			scheduleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
