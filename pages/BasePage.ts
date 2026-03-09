import { Page, expect, Locator } from '@playwright/test';

export abstract class BasePage {
    constructor(protected page: Page) { }

    async navigate(path: string = '/') {
        await this.page.goto(path);
    }

    async waitForElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }

    async click(locator: Locator) {
        await this.waitForElement(locator);
        await locator.click();
    }

    async type(locator: Locator, text: string) {
        await this.waitForElement(locator);
        await locator.fill(text);
    }
}
