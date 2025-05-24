import { test, expect } from '@playwright/test';

test('handle stale elements', async ({ page }) => {
await page.goto('https://www.instagram.com/')

    // Wait for the button to appear and click it
    await page.waitForSelector('#button', { state: 'visible' });
    await page.locator('#button').click();

    // Wait for page load state
    await page.waitForLoadState('domcontentloaded');

    // Wait for the textarea
    await page.waitForSelector('//textarea', { state: 'visible' });
});
