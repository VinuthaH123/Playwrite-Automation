import { test, expect } from '@playwright/test';

test('Locators Demo - Google and Saucedemo', async ({ page }) => {
  await page.goto('https://www.google.com');

  await page.locator('[id="APjFqb"]').fill('Playwright');

  await page.getByRole('button', { name: 'Google Search' }).first().click()

  await page.waitForTimeout(2000)// Wait for results

  await page.goto('https://www.saucedemo.com')


  await expect(page.getByText('Accepted usernames are:')).toBeVisible();

  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');

  // 6. **getByTitle** - Title attribute (Google uses it for some links)
  await page.goto('https://www.google.com');
  await page.getByTitle('Search').isVisible();

})
