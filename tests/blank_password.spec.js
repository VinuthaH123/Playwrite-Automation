import { test,expect } from '@playwright/test';
test('has login',async ({page})=>{
    await page.goto('https://www.saucedemo.com')
    await page.locator('[placeholder="Username"]').fill('standard_user')
    await page.waitForTimeout(1000)
    await page.getByPlaceholder('password').fill('')
    await page.waitForTimeout(1000)
    await page.click('[data-test="login-button"]')
    await expect(page.locator('[class="error-message-container error"]')).toHaveText('Epic sadface: Password is required')

    
    })
    