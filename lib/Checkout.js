class Checkout {
	constructor({ pricingRules }) {
		this.items = [];
		this.pricingRules = pricingRules;
	}

	scan(item) {
		this.items.push({ ...item });

		this.pricingRules.forEach(pricingRule => {
			this.items = pricingRule.updatePrices(item.sku, this.items);
		});
	}

	total() {
		if (!this.items.length) return 0;

		return this.items.reduce((total, item) => total + item.price);
	}
}

module.exports = Checkout;
