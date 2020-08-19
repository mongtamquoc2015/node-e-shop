const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	id: String
});

const Session = mongoose.model('Session', userSchema, 'session');

module.exports = Session;