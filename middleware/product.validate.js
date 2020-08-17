module.exports.store = (req, res, next) => {
	const errors = [];
	if (!req.body.name) {
		errors.push("Name is require");
	}
	if (!req.body.price) {
		errors.push("Price is require")
	}
	if (!req.body.imgUrl) {
		errors.push("image is require");
	}
	if (errors) {
		res.render('admin/pages/add-product', { title: "Add product", errors: errors });
	}
	next();
}