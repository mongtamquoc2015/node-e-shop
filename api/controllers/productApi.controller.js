const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {
	const products = await Product.find();
	res.json(products);
}

module.exports.store = async (req, res) => {
	const newProduct = await Product.create(req.body);
	res.json(newProduct);
}

module.exports.update = async (req, res, next) => {
	const id = req.params.id;
	await Product.findByIdAndUpdate(id, { $set: req.body }, (err, product) => {
		if (err) return next(err);
		res.send('Product updated');
	});
}

module.exports.destroy = async (req, res) => {
	const id = req.params.id;
	await Product.remove({ _id: id });
	res.send('Product deleted');
}