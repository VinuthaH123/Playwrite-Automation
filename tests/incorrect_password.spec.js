import { test,expect } from '@playwright/test';
test('has login',async ({page})=>{
    await page.goto('https://www.saucedemo.com')
    //await page.getByPlaceholder('Username').fill('standard_user')
    //await page.getByPlaceholder('Username').fill('standard_us')
    await page.getByPlaceholder('Username').fill('locked_out_user')

    await page.waitForTimeout(1000)
    //await page.getByPlaceholder('password').fill('1234')
    await page.getByPlaceholder('password').fill('secret_sauce')

    await page.waitForTimeout(1000)
    await page.click('[data-test="login-button"]')
    //await expect(page.locator('[class="error-message-container error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service')
    await expect(page.locator('[class="error-message-container error"]')).toHaveText('Epic sadface: Sorry, this user has been locked out.')


})