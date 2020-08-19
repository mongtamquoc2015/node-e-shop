const db = require('../../db/lowdb');
const md5 = require('md5');

module.exports.getAllProducts = (req, res) => {
	const page = parseInt(req.query.page) || 1;
	const perPage = 8;
	const start = (page - 1) * perPage;
	const end = page * perPage;

	const products = db.get('products').value().slice(start, end);
	const maxPage = Math.round(db.get('products').value().length / perPage);

	if (page >= maxPage) {
		res.render('home/pages/products', {
			products: products,
			page: maxPage,
			maxPage: maxPage
		});
	}

	res.render('home/pages/products', {
		products: products,
		page: page,
		maxPage: maxPage
	});
}


module.exports.showLoginForm = (req, res) => {
	const categories = db.get('category').value();
	res.render('home/pages/login', { title: 'Login', categories: categories });
}

module.exports.attempsUserLogin = (req, res) => {
	const email = req.body.email;
	const password = md5(req.body.password);
	const users = db.get('users');
	const user = users.find({ email: email, password: password }).value();
	if (user) {
		res.cookie('userId', user.id, {
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