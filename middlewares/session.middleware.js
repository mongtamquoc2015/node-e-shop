const uuid = require('uuid');
const Session = require('../models/session.model');

module.exports = (req, res, next) => {
	if (!req.signedCookies.sessionId) {
		const sessionId = uuid.v4();
		res.cookie('sessionId', sessionId, {
			signed: true
		});
		Session.insertMany([{ id: sessionId}]);
	}
	next();
}