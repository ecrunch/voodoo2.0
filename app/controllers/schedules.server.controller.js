'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Schedule = mongoose.model('Schedule'),
	_ = require('lodash');


/*
* Create a Schedule
*/
exports.create = function(req, res) {
	var schedule = new Schedule(req.body);
	schedule.user = req.user;

	schedule.save(function(err) {
		if(err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			res.json(schedule);
		}
	});
};

/*
* Show the current schedule
*/
exports.read = function(req, res) {
	res.json(req.schedule);
};

/*
* Update a schedule
*/
exports.update = function(req, res) {
	var schedule = req.schedule;
	
	schedule = _.extend(schedule, req.body);

	schedule.save(function(err) {
		if(err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			res.json(schedule);
		}
	});
};

/*
* Delete a schedule
*/
exports.delete = function(req, res) {
	var schedule = req.schedule;

	schedule.remove(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			res.json(schedule);
		}
	});
};

/*
* List of schedules
*/

exports.list = function(req, res) {

	Schedule.find().sort('-created').populate('user', 'displayName').exec(function(err, schedules) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		}
		else {
			res.json(schedules);
		}
	});

};


// unsure about these last two

/*
*  Schedules middleware
*/
exports.scheduleByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Schedule is invalid'
		});
	}

	Schedule.findById(id).populate('user', 'displayName').exec(function(err, schedule) {
		if (err) return next(err);
		if (!schedule) {
			return res.status(404).send({
  				message: 'Schedule not found'
  			});
		}
		req.schedule = schedule;
		next();
	});
};

/**
 * Schedule authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.schedule.user.id !== req.user.id) {
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
