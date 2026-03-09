import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },

    projects: [
        {
            name: 'trendyol',
            testMatch: /.*trendyol.spec.ts/,
            use: {
                ...devices['Desktop Chrome'],
                baseURL: 'https://www.trendyol.com',
            },
        },
        {
            name: 'kidokit',
            testMatch: /.*kidokit.spec.ts/,
            use: {
                ...devices['Desktop Chrome'],
                baseURL: 'https://kidokit.com',
            },
        },
    ],
});
