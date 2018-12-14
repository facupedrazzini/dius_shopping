const assert = require('chai').assert;
const Checkout = require('../lib/Checkout');

describe('Checkout', () => {
	const pricingRules = [];
	before(() => {
		// TODO: Add pricing rules
	});

	it('should create a checkout with price rules', () => {
		const pricingRules = [];
		const checkout = new Checkout({ pricingRules });

		assert.equal(checkout.pricingRules, pricingRules);
	});
});
