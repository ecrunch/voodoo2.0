'use strict';

// Setting up route
angular.module('scheduler').config(['$stateProvider',
        function($stateProvider) {
                // Scheduler state routing
                $stateProvider.
                state('showScheduler', {
                        url: '/scheduler',
                        templateUrl: 'modules/scheduler/views/scheduler.client.view.html'
                });
        }
]);


