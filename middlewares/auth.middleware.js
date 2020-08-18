const db = require('../db/lowdb');

module.exports.redirectIfNotLoggedIn = (req, res, next) => {
	const id = req.signedCookies.userId;
	const user = db.get('users').find({ id: id }).value();
	if (!id && !user) {
		res.redirect('/auth/login');
		return;
	}
	
	next();
}