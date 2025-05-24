import {test, expect} from '@playwright/test'
const {LoginPage} = require('../pages/loginPage')

test('Login', async({page}) =>{
    const loginPage  = new LoginPage(page)
    await loginPage.visit()
    await loginPage.login()
    await expect(page).toHaveURL(/inventory/)
})

test('Login2', async({page}) =>{
    const loginPage  = new LoginPage(page)
    await loginPage.visit()
    await loginPage.login()
    await expect(page).toHaveURL(/inventory/)
})

test('login', async({page})=>{
    await page.getByPlaceholder('Username')
    await page.getByPlaceholder('Username', {exact: true})


})