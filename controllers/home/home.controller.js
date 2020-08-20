const Product = require('../../models/product.model');
const { NotExtended } = require('http-errors');


module.exports.getAllProducts = async (req, res, next) => {
	try {
		const products = await Product.find();
		res.render('home/pages/products', { products: products });
	} catch (err) {
		next(err);
	}
}

module.exports.getProductHighlights = async (req, res, next) => {
	try {
		const products = await Product.find()
		res.render('home/pages/index', { products: products.slice(0, 24) });
	} catch (err) {
		next(err);
	}
}
