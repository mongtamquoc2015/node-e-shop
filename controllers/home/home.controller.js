const Product = require('../../models/product.model');


module.exports.getAllProducts = async (req, res) => {
	const products = await Product.find();
	res.render('home/pages/products', {products: products});
}

module.exports.getProductHighlights = async (req, res) => {
	const products = await Product.find()
	res.render('home/pages/index', {products: products.slice(0,24)});
}
