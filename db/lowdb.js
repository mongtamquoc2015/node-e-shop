var lowdb = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = lowdb(adapter)

db.defaults({
	products: [
		{
			imgUrl: "https://bizweb.dktcdn.net/100/318/614/products/2.gif?v=1596861053770",
			name: "Marcus waves tee",
			price: 345000
		},
		{
			imgUrl: "https://bizweb.dktcdn.net/100/318/614/products/meow-02.gif?v=1594748096573",
			name: "Meow the egg tee",
			price: 324000
		},
		{
			imgUrl: "https://bizweb.dktcdn.net/100/318/614/products/twen-04.gif?v=1594657843217",
			name: "'Twen' the warrior tee",
			price: 345000
		},
		{
			imgUrl: "https://bizweb.dktcdn.net/thumb/large/100/318/614/products/plogosau.gif",
			name: "P logo jacket",
			price: 396000
		}
	],
	categories: [
		{
			id: 1,
			name: "Tee"
		},
		{
			id: 2,
			name: "Jacket"
		},
	]
});

module.exports = db;