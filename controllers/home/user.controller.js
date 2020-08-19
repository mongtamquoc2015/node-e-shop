const db = require('../../db/lowdb');
const md5 = require('md5');
const app = require('express')();

module.exports.showLoginForm = (req,res) => {
	const categories = db.get('category').value();
	res.render('home/pages/login', {title: 'Login', categories: categories});
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
	const categories = db.get('category').value();
	res.render('home/pages/signin', { title: 'Signin', categories: categories });
}