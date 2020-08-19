const User = require('../models/user.model');

module.exports.redirectIfNotLoggedIn = async (req, res, next) => {
		const id = req.signedCookies.userId;
		const user = await User.find({ id: id });
		if (!id && !user) {
			res.redirect('/auth/login');
			return;
		}
		next();
	}

module.exports.categoryValidation = (req, res, next) => {
		const errors = []
		if (!req.body.name) {
			errors.push("Name is require");
		}
		if (errors) {
			res.render('admin/pages/add-category', { title: "List category", errors: errors });
		}
		next();
	}
	
module.exports.productValidation = (req, res, next) => {
		const errors = [];
		if (!req.body.name) {
			errors.push("Name is require");
		}
		if (!req.body.price) {
			errors.push("Price is require")
		}
		if (!req.body.imgUrl) {
			errors.push("image is require");
		}
		if (errors) {
			res.render('admin/pages/add-product', { title: "Add product", errors: errors });
		}
		next();
	}




