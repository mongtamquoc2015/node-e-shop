const db = require("../../db/lowdb");

module.exports.addTocCart = (req, res, next) => {
	const productId = req.params.productId;
	const sessionId = req.signedCookies.sessionId;
	if (!sessionId) {
		res.redirect('/products');
	}

	// add to cart
	res.redirect('/products');

}