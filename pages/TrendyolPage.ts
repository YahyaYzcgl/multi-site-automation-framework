import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class TrendyolPage extends BasePage {
    private readonly searchInput: Locator;
    private readonly searchButton: Locator;
    private readonly firstProduct: Locator;
    private readonly addToBasketButton: Locator;
    private readonly basketButton: Locator;
    private readonly closeGenderModal: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('input[data-testid="suggestion"]');
        this.searchButton = page.locator('i[data-testid="search-icon"]');
        this.firstProduct = page.locator('.p-card-chldrn-cntnr').first();
        this.addToBasketButton = page.locator('.add-to-basket');
        this.basketButton = page.locator('.account-basket');
        this.closeGenderModal = page.locator('.modal-close');
    }

    async goToHomePage() {
        await this.navigate('/');
        // Bazen cinsiyet seçimi modalı çıkabiliyor, çıkarsa kapat.
        if (await this.closeGenderModal.isVisible()) {
            await this.closeGenderModal.click();
        }
    }

    async searchProduct(productName: string) {
        await this.type(this.searchInput, productName);
        await this.searchInput.press('Enter');
    }

    async addFirstProductToCart() {
        await this.click(this.firstProduct);

        // Yeni sekme açılırsa diye handling (Trendyol genelde yeni sekmede açar)
        // Ancak basitleştirmek için mevcut sayfada devam ettiğini varsayalım veya sekmeyi bekleme mantığı eklenebilir.
        // Playwright `window` handling örneği:
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.firstProduct.click()
        ]);

        await newPage.waitForLoadState();
        const addToBasketOnNewPage = newPage.locator('.add-to-basket');
        await addToBasketOnNewPage.click();
    }

    async goToBasket() {
        await this.click(this.basketButton);
    }
}
