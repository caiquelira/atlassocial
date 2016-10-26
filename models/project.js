var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = require('./user.js');

var ProjectSchema = new Schema({
	name: String,
	city: String,
	state: String,
	creator: {type : mongoose.Schema.ObjectId, ref : 'User'},
	contribuitors: [ {type : mongoose.Schema.ObjectId, ref : 'User'} ],
	admins: [ {type : mongoose.Schema.ObjectId, ref : 'User'} ],
	description: String,
	tags: [String],
	picture: String,
	timeCreated: Date,
	lastUpdated: Date
});

module.exports = mongoose.model('Project', ProjectSchema);