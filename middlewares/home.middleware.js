const db = require('../db/lowdb');

const middleware = {

	getAllCategory(req,res,next) {
		const categories = db.get('category').value();
		res.locals.categories = categories;
		next();
	},

	getUserLogin(req,res,next) {
		const user = db.get('users').find({id: req.signedCookies.userId}).write();
		res.locals.user = user;
		console.log(`user = ${user.name}`);
		next();
	}
};

module.exports = middleware;