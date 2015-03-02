'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	schedules = require('../../app/controllers/schedules.server.controller');


module.exports = function(app) {
	
	//Task routes
	app.route('/schedules')
		.get(schedules.list)
		.post(users.requiresLogin, schedules.create);

	app.route('/schedules/:scheduleId')
		.get(schedules.read)
		.put(users.requiresLogin, schedules.hasAuthorization, schedules.update)
		.delete(users.requiresLogin, schedules.hasAuthorization, schedules.delete);


	// Finish by binding the task middleware
	app.param('scheduleId', schedules.scheduleByID);
	
};
