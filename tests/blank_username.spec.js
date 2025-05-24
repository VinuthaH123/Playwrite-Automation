import { test,expect } from '@playwright/test';
test('has login',async ({page})=>{
    await page.goto('https://www.saucedemo.com')
    await page.locator('[placeholder="Username"]').fill('')
    await page.waitForTimeout(1000)
    await page.locator('[id="password"]').fill('secret_sauce')
    await page.waitForTimeout(1000)
    await page.click('[data-test="login-button"]')
    
    
    })
    