var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = require('./user.js');
var project = require('./project.js');

var ProjectSchema = new Schema({
	project: {type : mongoose.Schema.ObjectId, ref : 'Project'},
	member: {type : mongoose.Schema.ObjectId, ref : 'User'},
	type: String
});

module.exports = mongoose.model('Membership', ProjectSchema);