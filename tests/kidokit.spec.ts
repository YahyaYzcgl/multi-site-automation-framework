import { test } from '@playwright/test';
import { KidokitPage } from '../pages/KidokitPage';

test.describe('Kidokit Menü Doğrulama', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    const menus = [
        { name: 'Blog', url: '/blogg' },
        { name: 'Hakkımızda', url: '/hakkimizda' }
    ];

    for (const menu of menus) {
        test(`Dinamik Menü Testi: ${menu.name}`, async ({ page }) => {
            const kidokit = new KidokitPage(page);
            await kidokit.clickMenuAndVerifyUrl(menu.name, menu.url);
        });
    }
});
