const Product = require('../../models/product.model');

module.exports.index = async (req, res, next) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		next(err);
	}
}

module.exports.store = async (req, res, next) => {
	try {
		const newProduct = await Product.create(req.body);
		res.json(newProduct);
	} catch (err) {
		next(err);
	}
}

module.exports.update = async (req, res, next) => {
	try {
		const id = req.params.id;
		await Product.findByIdAndUpdate(id, { $set: req.body }, (err, product) => {
			if (err) return next(err);
			res.send('Product updated');
		});
	} catch (err) {
		next(err);
	}
}

module.exports.destroy = async (req, res) => {
	try {
		const id = req.params.id;
		await Product.remove({ _id: id });
		res.send('Product deleted');
	} catch (err) {
		next(err);
	}
}