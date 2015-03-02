'use strict';

/**
 * Module dependencies.
 */
var users = require('../../app/controllers/users.server.controller'),
	articles = require('../../app/controllers/articles.server.controller');


module.exports = function(app) {
	
	//Task routes
	app.route('/tasks');
	
};



