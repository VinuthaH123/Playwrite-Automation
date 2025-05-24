import {test,expect} from '@playwright/test'
test('scroll by keyboard', async ({page}) => {
    await page.goto('https://www.nike.com/in/men')
    for(let i=0; i<5; i++){
await page.keyboard.press('End')
await page.waitForTimeout(100)
    }
})
test('scroll by mouse', async ({page}) => {
    await page.goto('https://www.nike.com/in/men')
    for(let i=0; i<5; i++){
        await page.mouse.wheel(0,1500)
        await page.waitForTimeout(100)

    }

    
})
test('scroll by javascript',async ({page}) => {
    await page.goto('https://www.nike.com/in/men')
    for(let i=0; i<5; i++){
        page.evaluate("window.scrollTo(0, document.body.scrollHeight);")
        await page.waitForTimeout(100)

    }
       
})