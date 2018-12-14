class DiscountRule {
	constructor({ sku, priceWithDiscount, minimumQuantity }) {
		this.sku = sku;
		this.priceWithDiscount = priceWithDiscount;
		this.minimumQuantity = minimumQuantity;
	}
}

module.exports = DiscountRule;
