const Products = require('../../models/product.model');

module.exports.index = async (req, res) => {
	const products = await Products.find();
	res.json(products);
}
