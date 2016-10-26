var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = require('./usuario.js');

var ProjetoSchema = new Schema({
	name: String,
	city: String,
	state: String,
	creator: [user],
	contribuitors: [user],
	admins: [user],
	description: String,
	tags: [String],
	picture: String,
	timeCreated: Date,
	lastUpdated: Date
});

module.exports = mongoose.model('Projeto', ProjetoSchema);