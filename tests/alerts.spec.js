import {test,expect} from '@playwright/test'

// Playwright provides an event-driven way to handle dialogs and alerts.

test('Handle JS alert', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async d =>{
        console.log(d.message())
        await page.waitForTimeout(10000)
        await d.accept()
    })
    await page.locator('[onclick="jsAlert()"]').click()
    await expect(page.getByText(' You successfully clicked an alert')).toBeVisible()
})

test('Handle Js confirm accept alerts', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async d =>{
        console.log(d.message())
        await page.waitForTimeout(10000)
        await d.accept()
    })
    await page.locator('[onclick="jsConfirm()"]').click()
    await expect(page.getByText('You clicked: Ok')).toBeVisible()
})

test('Handle Js confirm cancel alerts', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async d =>{
        console.log(d.message())
        await page.waitForTimeout(10000)
        await d.dismiss()
    })
    await page.locator('[onclick="jsConfirm()"]').click()
    await expect(page.getByText('You clicked: Cancel')).toBeVisible()
})

test('Accept Js prompt alert', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async d =>{
        console.log(d.message())
        await page.waitForTimeout(10000)
        await d.accept('Malini')
    })
    await page.locator('[onclick="jsPrompt()"]').click()
    await expect(page.getByText('You entered: Malini')).toBeVisible()
})

test('Cancel JS prompt alert', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on('dialog', async d =>{
        console.log(d.message())
        await page.waitForTimeout(10000)
        await d.dismiss()
    })
    await page.locator('[onclick="jsPrompt()"]').click()
    await expect(page.getByText('You entered: null')).toBeVisible()

})