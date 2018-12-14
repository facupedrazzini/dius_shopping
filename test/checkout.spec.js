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

	let checkout;
	beforeEach(() => {
		checkout = new Checkout({ pricingRules });
	});

	it('should create a checkout with price rules', () => {
		assert.equal(checkout.pricingRules, pricingRules);
	});

	describe('Scan', () => {
		it('should add item info into list of items', () => {
			checkout.scan(data.products.appleTv);

			assert.equal(checkout.items[0].sku, 'atv');
		});

		describe('XForXRule', () => {
			it('should apply the coorect price', () => {
				checkout.scan(data.products.appleTv);
				checkout.scan(data.products.appleTv);
				checkout.scan(data.products.appleTv);
				console.log(checkout.items);

				assert.equal(checkout.items[2].price, 0);
			});
		});
	});
});
