const Product = require('../lib/Product');
const BundleRule = require('../lib/rules/BundleRule');
const DiscountPerQuantityRule = require('../lib/rules/DiscountPerQuantityRule');
const XForXRule = require('../lib/rules/XforXRule');
const rules = require('../data/rules.json');
const products = require('../data/products.json');

module.exports = {
	products: {
		ipad: new Product(products.IPAD),
		mackbookPro: new Product(products.MACKBOOK_PRO),
		appleTv: new Product(products.APPLE_TV),
		vgaAdapter: new Product(products.VGA_ADAPTER)
	},
	rules: {
		xForX: new XForXRule(rules.X_FOR_X),
		discountPerQuantity: new DiscountPerQuantityRule(
			rules.DISCOUNT_PER_QUANTITY
		),
		bundle: new BundleRule(rules.BUNDLE)
	}
};
