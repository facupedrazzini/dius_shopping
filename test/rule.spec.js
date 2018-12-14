const assert = require('chai').assert;
const BundleRule = require('../lib/rules/BundleRule');
const DiscountPerQuantityRule = require('../lib/rules/DiscountPerQuantityRule');
const XforXRule = require('../lib/rules/XforXRule');
const data = require('./data.mocks');

describe('Rule', () => {
	describe('BundleRule', () => {
		let rule;
		before(() => {
			rule = new BundleRule({
				paidSkuProduct: data.products.mackbookPro.sku,
				freeSkuProduct: data.products.vgaAdapter.sku
			});
		});

		it('should create rule with the correct params', () => {
			assert.equal(rule.paidSkuProduct, 'mbp');
			assert.equal(rule.freeSkuProduct, 'vga');
		});

		it('should apply the correct price', () => {
			const items = [
				{ ...data.products.mackbookPro },
				{ ...data.products.vgaAdapter },
				{ ...data.products.vgaAdapter },
				{ ...data.products.ipad }
			];

			const updatedItems = rule.updatePrices(
				data.products.mackbookPro.sku,
				items
			);

			assert.equal(updatedItems.filter(it => it.price === 0).length, 1);
		});
	});

	describe('DiscountPerQuantityRule', () => {
		let rule;
		before(() => {
			rule = new DiscountPerQuantityRule({
				sku: data.products.ipad.sku,
				priceWithDiscount: 499.99,
				minimumQuantity: 4
			});
		});

		it('should create rule with the correct params', () => {
			assert.equal(rule.sku, 'ipd');
			assert.equal(rule.priceWithDiscount, 499.99);
			assert.equal(rule.minimumQuantity, 4);
		});

		it('should apply the correct price', () => {
			const items = [
				{ ...data.products.ipad },
				{ ...data.products.ipad },
				{ ...data.products.ipad },
				{ ...data.products.ipad }
			];

			const updatedItems = rule.updatePrices(
				data.products.ipad.sku,
				items
			);

			assert.equal(
				updatedItems.filter(it => it.price === rule.priceWithDiscount)
					.length,
				4
			);
		});
	});

	describe('XforXRule', () => {
		let rule;
		before(() => {
			rule = new XforXRule({
				paidQuantity: 2,
				totalQuantity: 3,
				sku: data.products.appleTv.sku
			});
		});

		it('should create rule with the correct params', () => {
			assert.equal(rule.paidQuantity, 2);
			assert.equal(rule.totalQuantity, 3);
			assert.equal(rule.sku, 'atv');
		});

		it('should apply the correct price', () => {
			const items = [
				{ ...data.products.appleTv },
				{ ...data.products.appleTv },
				{ ...data.products.appleTv }
			];

			const updatedItems = rule.updatePrices(
				data.products.appleTv.sku,
				items
			);

			assert.equal(updatedItems[2].price, 0);
		});
	});
});
