const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	phoneNo: {
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('User', userSchema);
