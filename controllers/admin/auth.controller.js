const User = require('../../models/user.model');
const md5 = require('md5');

module.exports.displayLoginForm = (req,res) => {
	res.render('auth/login');
}

module.exports.attemptsLoginForm = async (req,res) => {
	const email = req.body.email;
	const password = req.body.password;
	const user = await User.findOne({email: email});
	
	if (!user) {
		res.render('auth/login', {errors: [
			"User does not exist"
		]});
		return;
	}
	if (user.password != md5(password))	{
		res.render('auth/login', {errors: [
			"Wrong password"
		]});
		return;	
	}

	res.cookie('adminId', md5(user.id), {
		signed: true
	});
	res.redirect('/admin');
}