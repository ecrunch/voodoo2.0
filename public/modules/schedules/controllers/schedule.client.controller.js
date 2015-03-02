'use strict';

angular.module('schedules').controller('ScheduleController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;



		$scope.test = function() {
			alert("Hello");
		};



		$scope.create = function() {

		};


		$scope.remove = function() {


		};

		$scope.update = function() {


		};


		$scope.find = function() {


		};


		$scope.findOne = function() {


		};



	}
]);
