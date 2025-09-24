/*import {test,expect} from '@playwright/test'

test('Handle multiple windows and tabs', async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://training.rcvacademy.com/')

    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('(//img)[3]').click()
    ])

    await newPage.locator('[aria-label="Share"]').first().click()
    await newPage.waitForTimeout(1000)
    await newPage.close()
})*/
import { test, expect } from '@playwright/test';

test('Handle multiple tabs', async ({ browser }) => {
  const context = await browser.newContext();

  // Open the first tab
  const page1 = await context.newPage();
  await page1.goto('https://example.com');

  // Open the second tab
  const page2 = await context.newPage();
  await page2.goto('https://playwright.dev');

  // Perform actions in the second tab
  await page2.locator('text=Get Started').click();

  // Switch back to the first tab
  await page1.bringToFront();
  await expect(page1).toHaveTitle(/Example Domain/);
});
