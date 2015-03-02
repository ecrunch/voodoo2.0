'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');



var ScheduleSchema = new Schema({
	
	created: {
		type: Date,
		default: Date.now,
	},

	/*
	for now block out user
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	*/
});

mongoose.model('Schedule', ScheduleSchema);
