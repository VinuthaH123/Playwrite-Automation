import {test,expect} from'@playwright/test'
    test('Drag and drop ', async({page}) => {
        await page.goto('https://jqueryui.com/droppable/')
        const frame = await page.frameLocator('.demo-frame')
        await frame.locator('#draggable').dragTo(await frame.locator('#droppable'))
    })
    
    /*
    If you want precise control over the drag operation,
    use lower-level methods like
    locator.hover(), mouse.down(), mouse.move() and mouse.up().
     */
    test('Drag manually', async({page}) =>{
        await page.goto('https://jqueryui.com/droppable/')
        const frame = await page.frameLocator('.demo-frame')
        const dragEle = await frame.locator('#draggable')
        const dropEle = await frame.locator('#droppable')
    
        await dragEle.hover()
        await page.mouse.down()
        await dropEle.hover()
        await page.mouse.up()
    })
