import { test, expect } from '@playwright/test';

test('View all products on inventory page ', async ({ page }) => {
  // Step 1: Open login page
  await page.goto('https://www.saucedemo.com');

  // Step 2: Login with valid credentials
  await page.getByPlaceholder('Username').fill('standard_user')
  await page.waitForTimeout(1000)
  await page.getByPlaceholder('password').fill('secret_sauce')
  await page.waitForTimeout(1000)

  await page.click('[data-test="login-button"]');

  // Step 3: Confirm navigation to inventory page
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

  // Step 4: Check visibility of product items (one example of each)
  await expect(page.locator('[class="inventory_item_name "]').first()).toBeVisible()
  await expect(page.locator('[class="inventory_item_img"]').first()).toBeVisible({timeout:5000})
  await expect(page.locator('[class="inventory_item_description"]').first()).toBeVisible()
  await expect(page.locator('[class="inventory_item_price"]').first()).toBeVisible()
await expect(page.locator('[id="add-to-cart-sauce-labs-backpack"]').first()).toBeVisible()

});
