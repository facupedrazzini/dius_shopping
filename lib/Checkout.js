class Checkout {
	constructor({ pricingRules }) {
		this.items = [];
		this.pricingRules = pricingRules;
	}

	scan(item) {
		this.items.push({ ...item });
	}
}

module.exports = Checkout;
