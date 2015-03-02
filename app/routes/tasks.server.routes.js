'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	tasks = require('../../app/controllers/tasks.server.controller');


module.exports = function(app) {
	
	//Task routes
	app.route('/tasks')
		.get(tasks.list)
		.post(users.requiresLogin, tasks.create);

	app.route('/tasks/:taskId')
		.get(tasks.read)
		.put(users.requiresLogin, tasks.hasAuthorization, tasks.update)
		.delete(users.requiresLogin, tasks.hasAuthorization, tasks.delete);


	// Finish by binding the task middleware
	app.param('taskId', tasks.taskByID);
	
};



