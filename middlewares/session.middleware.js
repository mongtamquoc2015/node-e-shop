const uuid = require('uuid');
const Session = require('../models/session.model');

module.exports = async (req, res, next) => {
	try {
		if (!req.signedCookies.sessionId) {
			const sessionId = uuid.v4();
			res.cookie('sessionId', sessionId, {
				signed: true
			});
			await Session.insertMany([{ id: sessionId }]);
		}
		next();
	} catch (err) {
		next(err);
	}
}