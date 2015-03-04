'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Task = mongoose.model('Task'),
	_ = require('lodash');


/*
* Create a task
*/
exports.create = function(req, res) {
	var task = new Task(req.body);
	task.user = req.user;

	/*
		TODO: initialize the task here
	*/

	task.save(function(err) {
		if(err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			res.json(task);
		}
	});
};

/*
* Show the current task
*/
exports.read = function(req, res) {
	res.json(req.task);
};

/*
* Update a task
*/
exports.update = function(req, res) {
	var task = req.task;
	
	task = _.extend(task, req.body);

	task.save(function(err) {
		if(err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			res.json(task);
		}
	});
};

/*
* Delete a task
*/
exports.delete = function(req, res) {
	var task = req.task;

	task.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			res.json(task);
		}
	});
};

/*
* List of tasks
*/

exports.list = function(req, res) {

	Task.find().sort('-created').populate('user', 'displayName').exec(function(err, tasks) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			res.json(tasks);
		}
	});

};


// unsure about these last two

/*
*  Tasks middleware
*/
exports.taskByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Task is invalid'
		});
	}

	Task.findById(id).populate('user', 'displayName').exec(function(err, task) {
		if (err) return next(err);
		if (!task) {
			return res.status(404).send({
  				message: 'Task not found'
  			});
		}
		req.task = task;
		next();
	});
};

/**
 * Task authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.task.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};


