const Category = require('../models/category.model');
const User = require('../models/user.model');

const middleware = {

	async getAllCategory(req,res,next) {
		const categories = await Category.find();
		res.locals.categories = categories;
		next();
	},

	getUserLogin(req,res,next) {
		const user = User.find({ id: req.signedCookies.userId});
		res.locals.user = user;
		next();
	}
};

module.exports = middleware;