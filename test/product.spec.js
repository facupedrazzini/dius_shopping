const assert = require('chai').assert;
const Product = require('../lib/Product');

describe('Product', () => {
	it('should create a product with the correct properties', () => {
		const product = new Product({
			sku: 'skufoo',
			name: 'foo',
			price: 10.11
		});

		assert.equal(product.sku, 'skufoo');
		assert.equal(product.name, 'foo');
		assert.equal(product.price, 10.11);
	});
});
