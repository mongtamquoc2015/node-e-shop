const db = require('../db/lowdb');

module.exports.displayLoginForm = (req,res) => {
	res.render('auth/login');
}

module.exports.attemptsLoginForm = (req,res) => {
	const email = req.body.email;
	const password = req.body.password;
	const user = db.get('users')
		.find({email: email})
		.value();
	
	if (!user) {
		res.render('auth/login', {errors: [
			"User does not exist"
		]});
		return;
	}
	if (user.password != password)	{
		res.render('auth/login', {errors: [
			"Wrong password"
		]});
		return;	
	}

	res.redirect('/admin');
}