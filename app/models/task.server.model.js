'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	crypto = require('crypto');



var TaskSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	description: {
		type: String,
		default: 'User task'
	},
	totalMinutes: {
		type: Number,
		default: 0
	},
	dueDate: {
		type: Date
	},
	taskType: {
		type: String,
		default: 'Task'
	},
	prevScore: {
		type: Number,
		default: 0
	}
});

mongoose.model('Task', TaskSchema);


