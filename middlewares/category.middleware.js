module.exports.store = (req,res,next) => {
	const errors = []
	if (!req.body.name) {
		errors.push("Name is require");
	}
	if (errors) {
		res.render('admin/pages/add-category', {title: "List category", errors: errors});
  }
  next();
}