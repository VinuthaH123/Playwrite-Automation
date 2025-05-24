import {test,expect} from '@playwright/test'

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
})
