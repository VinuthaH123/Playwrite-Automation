import {test,expect} from '@playwright/test'
test('Checkout', async ({page})=>{
    await page.goto('https://www.saucedemo.com')
    await page.getByPlaceholder('Username').fill('standard_user')
    await page.waitForTimeout(1000)
    await page.getByPlaceholder('password').fill('secret_sauce')
    await page.waitForTimeout(1000)
  
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]')
    await page.click('[data-test="shopping-cart-link"]')
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html')

    await page.click('[id="checkout"]')
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')

    await page.getByPlaceholder('First Name').fill('abc')
    await page.getByPlaceholder('Last Name').fill('X')
    await page.getByPlaceholder('Zip/Postal Code').fill('12345')
    await page.click('[id="continue"]')

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack')


      await page.click('[id="finish"]')
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html')
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')


})