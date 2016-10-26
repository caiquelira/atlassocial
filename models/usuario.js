var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var project = require('./projeto.js')

var UsuarioSchema = new Schema({
	name: String,
	email: String,
	city: String,
	state: String,
	gender: String,
	bio: String,
	occupation: String,
	age: Number,
	competencies: [String],
	profilePic: String,
	projects: [ {type : mongoose.Schema.ObjectId, ref : 'Projeto'} ],
	auth: {
		platform: String,
		id: String,
		password: String
	},
	timeCreated: Date,
	lastUpdated: Date
});

module.exports = mongoose.model('Usuario', UsuarioSchema);