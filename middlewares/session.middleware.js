const uuid = require('uuid');
const db = require('../db/lowdb');

module.exports = (req, res, next) => {
	if (!req.signedCookies.sessionId) {
		const sessionId = uuid.v4();
		res.cookie('sessionId', sessionId, {
			signed: true
		});
		db.get('sessions').push({id: sessionId}).write();
	}
	next();
}