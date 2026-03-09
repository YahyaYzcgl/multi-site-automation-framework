import { test } from '@playwright/test';
import { TrendyolPage } from '../pages/TrendyolPage';

test.describe('Trendyol E-ticaret Akışı', () => {
    test('Ürün arama ve sepete ekleme simülasyonu', async ({ page }) => {
        const trendyol = new TrendyolPage(page);

        await trendyol.goToHomePage();
        await trendyol.searchProduct('iPhone');
        await trendyol.addFirstProductToCart();
        // Not: Trendyol'da gerçek ödeme adımı için login gerekebilir, 
        // gereksinimde "simüle eden" dendiği için sepete ekleme ve sepeti görme yeterlidir.
    });
});
