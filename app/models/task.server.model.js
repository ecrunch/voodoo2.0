
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
});

mongoose.model('Task', TaskSchema);


