const db = require('../db/lowdb');

const middleware = {

	getAllCategory(req,res,next) {
		const categories = db.get('category').value();
		res.locals.categories = categories;
		next();
	}
};

module.exports = middleware;