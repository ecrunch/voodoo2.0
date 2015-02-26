'use strict';

// Configuring the Scheduler module
angular.module('scheduler').run(['Menus',
        function(Menus) {
                // Set top bar menu items
                Menus.addMenuItem('topbar', 'Scheduler', 'scheduler', '/scheduler');
        }
]);
