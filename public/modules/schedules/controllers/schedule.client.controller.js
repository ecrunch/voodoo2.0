'use strict';

angular.module('schedules').controller('ScheduleController', ['$scope', 'Authentication', 'Schedules', 
	function($scope, Authentication, Schedules) {
		// This provides Authentication context.
		$scope.authentication = Authentication;



		$scope.test = function() {
			alert("Hello");
		};



		$scope.create = function() {
			var schedule = new Schedules();
			schedule.$save(function(response) {
				// nothing for now
				alert("Success");
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


		$scope.remove = function() {


		};

		$scope.update = function() {


		};


		$scope.find = function() {
			$scope.schedules = Schedules.query();
		};


		$scope.findOne = function() {


		};




	}
]);
