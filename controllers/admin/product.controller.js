const Products = require('../../models/product.model');

module.exports.index = async (req, res) => {
	const products = await Products.find();
	res.render('admin/pages/list-product', { title: "List product", products: products });
}

module.exports.create = (req, res) => {
	res.render('admin/pages/add-product', { title: "Add product" });
}

module.exports.store = async (req, res) => {
	const name = req.body.name;
	const price = req.body.price;
	const imgUrl = req.body.imgUrl;
	Products.insertMany([{
		name: name,
		price: price,
		imgUrl: imgUrl
	}]);

	const products = await Products.find();
	res.render('admin/pages/list-product', { title: "List product", products: products });
}

module.exports.edit = (req, res) => {
	res.redirect('/admin/list-product');
}

module.exports.update = (req, res) => {
	res.redirect('/admin/list-product');
}

module.exports.destroy = (req, res) => {
	res.redirect('/admin/list-product');
}
