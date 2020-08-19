const db = require('../../db/lowdb');
const md5 = require('md5');
const uuid = require('uuid');


module.exports.showLoginForm = (req,res) => {
	res.render('home/pages/login', {title: 'Login'});
}

module.exports.attempsUserLogin = (req,res) => {
	const email = req.body.email;
	const password = md5(req.body.password);
	const users = db.get('users');
	const user = users.find({email: email, password: password}).value();
	if (user) {
		res.cookie('userId',user.id, {
			signed: true
		});
		res.redirect('/');
	}
	res.redirect('/login');
}

module.exports.showSigninForm = (req, res) => {
	res.render('home/pages/signin', { title: 'Signin'});
}

module.exports.createUser = (req,res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;

	if (!name || !email || !password ) {
		res.render('home/pages/signin', {errors: ["Field is require!"]});
	}
	const user = {
		id: uuid.v4,
		name: name,
		email: email,
		password: md5(password)
	};
	db.get('users').push(user).write();
	req.cookie('userId', user.id, {
		signed: true
	});
	this.showLoginForm(req,res);
}