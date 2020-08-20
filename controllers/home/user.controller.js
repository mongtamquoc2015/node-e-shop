const User = require('../../models/user.model');


module.exports.showLoginForm = (req, res, next) => {
	res.render('home/pages/login', { title: 'Login' });
}

module.exports.attempsUserLogin = async (req, res) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const user = await User.findOne({ email: email, password: password });
		if (user) {
			res.cookie('userId', user.id, {
				signed: true
			});
			res.redirect('/');
		}
		res.render('home/pages/login', { title: 'Login', errors: ["Email or password is not correct."] });
	} catch (err) {
		next(err);
	}
}

module.exports.showSigninForm = (req, res) => {
	res.render('home/pages/signin', { title: 'Signin' });
}

module.exports.createUser = async (req, res, next) => {
	try {
		const name = req.body.name;
		const email = req.body.email;
		const password = req.body.password;
		let avatar = req.body.avatar;
		avatar = req.file.path.split('/').slice(1).join('/');

		if (!name || !email || !password) {
			res.render('home/pages/signin', { errors: ["Fields is require"] });
		}

		const user = {
			name: name,
			email: email,
			password: password,
			avatar: avatar
		};
		await User.insertMany([user]);

		res.render('home/pages/login', { title: 'Login' });
	} catch (err) {
		next(err);
	}
}