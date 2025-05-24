import {test,expect} from '@playwright/test'
test('Mouse-Actions',async ({page}) => {
    await page.goto('https://textbox.johnjago.com/')
    await page.getByPlaceholder('text').pressSequentially('vinutha')
    //await page.getByPlaceholder('text').dblclick()
    await page.waitForTimeout(1000)
    await page.getByPlaceholder('text').click({button: 'right'})
    await page.waitForTimeout(1000)
    await page.keyboard.type('Hello Playwright!');

    await page.keyboard.insertText('嗨');  




    
})