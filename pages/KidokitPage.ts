import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class KidokitPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    /**
     * Menüden dinamik olarak bir sayfaya tıklar ve URL'i doğrular.
     * @param menuText Menüde görünen metin (örn: 'Blog', 'Hakkımızda')
     * @param expectedUrl Beklenen URL parçası
     */
    async clickMenuAndVerifyUrl(menuText: string, expectedUrl: string) {
        const menuLocator = this.page.locator('ul.navbar-nav').getByText(menuText, { exact: true });
        await this.click(menuLocator);
        await expect(this.page).toHaveURL(new RegExp(expectedUrl));
    }
}
