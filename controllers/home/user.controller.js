const db = require('../../db/lowdb');
const md5 = require('md5');
const uuid = require('uuid');
const path = require('path');


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
	res.render('home/pages/login', { title: 'Login', errors: ["Email or password is not correct."]});
}

module.exports.showSigninForm = (req, res) => {
	res.render('home/pages/signin', { title: 'Signin'});
}

module.exports.createUser = (req,res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	let avatar = req.body.avatar;
	avatar = req.file.path.split('/').slice(1).join('/');

	if (!name || !email || !password) {
		res.render('home/pages/signin', {errors: ["Fields is require"]});
	}

	const user = {
		id: uuid.v4(),
		name: name,
		email: email,
		password: password,
		avatar: avatar
	};
	db.get('users').push(user).write();
	res.cookie('userId', user.id, {
		signed: true
	});
	res.render('home/pages/login', { title: 'Login' });
}