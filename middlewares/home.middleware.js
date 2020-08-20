const Category = require('../models/category.model');
const User = require('../models/user.model');

const middleware = {

	async getAllCategory(req, res, next) {
		try {
			const categories = await Category.find();
			res.locals.categories = categories;
			next();
		} catch (err) {
			next(err);
		}
	},

	async getUserLogin(req, res, next) {
		try {
			const user = await User.find({ id: req.signedCookies.userId });
			res.locals.user = user;
			next();
		} catch (err) {
			next(err);
		}
	}
};

module.exports = middleware;