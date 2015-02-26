'use strict';

angular.module('courses').controller('CoursesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Courses',
	function($scope, $stateParams, $location, Authentication, Courses) {
		$scope.authentication = Authentication;

		$scope.create = function() {
			var course = new Courses({
				name: this.name,
				type: this.type
			});
			course.$save(function(response) {
				$location.path('Courses/' + response._id);

				$scope.name = '';
				$scope.type = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(course) {
			if (course) {
				course.$remove();

				for (var i in $scope.courses) {
					if ($scope.courses[i] === course) {
						$scope.courses.splice(i, 1);
					}
				}
			} else {
				$scope.course.$remove(function() {
					$location.path('courses');
				});
			}
		};

		$scope.update = function() {
			var course = $scope.course;

			course.$update(function() {
				$location.path('courses/' + course._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.courses = Courses.query();
		};

		$scope.findOne = function() {
			$scope.course = Courses.get({
				courseId: $stateParams.courseId
			});
		};
	}
]);
