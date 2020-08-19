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
