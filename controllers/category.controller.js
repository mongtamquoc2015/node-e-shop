const db = require('../db/lowdb');
const uuid = require('uuid');
var categories = db.get('category');


module.exports.index = (req, res) => {
	res.render('admin/pages/list-category', { title: "List category", categories: categories.value() });
}

module.exports.create = (req, res) => {
	res.render('admin/pages/add-category', { title: "Add category" })
}

module.exports.store = (req, res) => {
	const name = req.body.name;
	const id = uuid.v4();
	const newCategory = { id: id, name: name };
	categories.push(newCategory).write();

	res.render('admin/pages/list-category', { title: "List category", categories: categories.value() });
}

module.exports.edit = (req, res) => {
	res.redirect('/admin/list-category');
}

module.exports.update = (req, res) => {
	res.redirect('/admin/list-category');
}

module.exports.destroy = (req, res) => {
	res.redirect('/admin/list-category');
}
