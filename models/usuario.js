var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
	name: String,
	email: String,
	city: String,
	state: String,
	gender: String,
	bio: String,
	occupation: String,
	idade: Number,
	auth: {
		platform: String,
		id: String,
		password: String
	},
	timeCreated: Date
});

module.exports = mongoose.model('Usuario', UsuarioSchema);