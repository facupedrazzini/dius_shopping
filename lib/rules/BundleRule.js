class XforXRule {
	constructor({ paidSkuProduct, freeSkuProduct }) {
		this.paidSkuProduct = paidSkuProduct;
		this.freeSkuProduct = freeSkuProduct;
	}

	updatePrices(itemSku, items) {
		if (itemSku !== this.paidSkuProduct && itemSku !== this.freeSkuProduct)
			return items;

		let freeItemsCount = items.filter(it => it.sku === this.paidSkuProduct)
			.length;

		return items.map(it => {
			if (it.sku === this.freeSkuProduct && freeItemsCount > 0) {
				freeItemsCount--;
				it.price = 0;
			}

			return it;
		});
	}
}

module.exports = XforXRule;
