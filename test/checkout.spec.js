const assert = require('chai').assert;
const Checkout = require('../lib/Checkout');
const data = require('./data.mocks');

describe('Checkout', () => {
	const pricingRules = [];
	before(() => {
		pricingRules.push(data.rules.bundle);
		pricingRules.push(data.rules.discountPerQuantity);
		pricingRules.push(data.rules.xForX);
	});

	it('should create a checkout with price rules', () => {
		const checkout = new Checkout({ pricingRules });

		assert.equal(checkout.pricingRules, pricingRules);
	});

	describe('Scan', () => {
		it('should add item info into list of items', () => {
			const checkout = new Checkout({ pricingRules });

			checkout.scan(data.products.appleTv);

			assert.equal(checkout.items[0].sku, 'atv');
		});
	});

	describe('Total', () => {
		let checkout;
		beforeEach(() => {
			checkout = new Checkout({ pricingRules });
		});

		it('should work the first example scenario', () => {
			checkout.scan(data.products.appleTv);
			checkout.scan(data.products.appleTv);
			checkout.scan(data.products.appleTv);
			checkout.scan(data.products.vgaAdapter);

			assert.equal(checkout.total(), 249);
		});

		it('should work the second example scenario', () => {
			checkout.scan(data.products.appleTv);
			checkout.scan(data.products.ipad);
			checkout.scan(data.products.ipad);
			checkout.scan(data.products.appleTv);
			checkout.scan(data.products.ipad);
			checkout.scan(data.products.ipad);
			checkout.scan(data.products.ipad);

			assert.equal(checkout.total(), 2718.95);
		});
	});
});
