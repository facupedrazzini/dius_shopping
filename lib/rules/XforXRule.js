class XforXRule {
	constructor({ sku, paidQuantity, totalQuantity }) {
		this.sku = sku;
		this.paidQuantity = paidQuantity;
		this.totalQuantity = totalQuantity;
	}

	updatePrices(itemSku, items) {
		if (itemSku !== this.sku) return items;

		let itemCount = 0;
		items.forEach(item => {
			if (item.sku === this.sku) {
				itemCount++;
				if (itemCount === this.totalQuantity) {
					itemCount = 0;
					item.price = 0;
				}
			}
		});

		return items;
	}
}

module.exports = XforXRule;
