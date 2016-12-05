var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
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
	auth: {
		platform: String,
		id: String,
		password: String
	},
	timeCreated: Date,
	lastUpdated: Date
});

module.exports = mongoose.model('User', UserSchema);