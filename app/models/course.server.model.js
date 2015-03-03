'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
/**
 * Users Schema
 */

var UsersSchema = new Schema({name: 'string'});

/**
 * Course Schema
 */
var CourseSchema = new Schema({
        created: {
                type: Date,
                default: Date.now
        },
        name: {
                type: String,
                default: '',
                trim: true,
                required: 'Name cannot be blank'
        },
        type: {
                type: String,
                default: '',
                trim: true,
		required: 'Type cannot be blank'
        },
        user: {
                type: Schema.ObjectId,
                ref: 'User'
        },

	users: [UsersSchema]

});

mongoose.model('Course', CourseSchema);
