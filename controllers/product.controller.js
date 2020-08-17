const db = require('../db/lowdb');
const uuid = require('uuid');
var products = db.get('products');


module.exports.index = (req, res) => {
	res.render('admin/pages/list-product', { title: "List product", products: products.value() });
}

module.exports.create = (req, res) => {
	res.render('admin/pages/add-product', { title: "Add product" })
}

module.exports.store = (req, res) => {
	const name = req.body.name;
	const id = uuid.v4();
	const newCategory = { id: id, name: name };
	products.push(newCategory).write();

	res.render('admin/pages/list-product', { title: "List product", products: products.value() });
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
