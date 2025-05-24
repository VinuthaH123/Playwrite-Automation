import {test} from '@playwright/test'
import users from '../test-data/users.json'

test.describe('Login with different users', ()=>{
    users.forEach(({username, password})=>{
        test(`Login with ${username}`, async({page})=>{
            await page.goto('https://www.saucedemo.com/')
            await page.locator('[placeholder="Username"]').fill(username)
            await page.locator('[name="password"]').fill(password)
            await page.locator('#login-button').click()
            await page.waitForTimeout(2000)
        })
    })
})
