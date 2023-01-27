const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema( {
	username: String,
	password: String,
	confirm_password: String
}),
user = mongoose.model('user', userSchema);

module.exports = user;