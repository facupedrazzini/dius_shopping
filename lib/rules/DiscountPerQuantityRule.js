class DiscountRule {
	constructor({ sku, priceWithDiscount, minimumQuantity }) {
		this.sku = sku;
		this.priceWithDiscount = priceWithDiscount;
		this.minimumQuantity = minimumQuantity;
	}

	updatePrices(itemSku, items) {
		if (itemSku !== this.sku) return items;

		if (
			items.filter(it => it.sku === this.sku).length >=
			this.minimumQuantity
		) {
			return items.map(it => {
				return it.sku === this.sku
					? { ...it, price: this.priceWithDiscount }
					: it;
			});
		}
	}
}

module.exports = DiscountRule;
