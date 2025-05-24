import { test, expect } from '@playwright/test';

test('Keyboard-functions', async ({ page }) => {
    await page.goto('https://textbox.johnjago.com/') 

    /*await page.goto('https://keycode.info');
    await page.keyboard.press('A');
    await page.screenshot({ path: 'A.png' });
    await page.keyboard.press('ArrowLeft');
    await page.screenshot({ path: 'ArrowLeft.png' });
    await page.keyboard.press('Shift+O');
    await page.screenshot({ path: 'O.png' })
    await page.keyboard.type('Hello')// Types instantly
await page.keyboard.type('World', { delay: 100 })
//await page.keyboard.down('b') */

await page.keyboard.type('Hello World!')

// Select all (Ctrl + A) and delete
await page.keyboard.press('Control+A');
await page.keyboard.press('Backspace');

});
test('Demoqa-assignment', async ({page}) => {
    await page.goto('https://demoqa.com/login')


    await page.getByPlaceholder('UserName').fill('vinutha')
    await page.waitForTimeout(30000)
    await page.getByPlaceholder('Password').fill('Vinu@123')
    await page.waitForTimeout(30000)
    await page.click('[id="login"]')
    await page.waitForTimeout(30000)


    //await expect(page.locator('[id="userName-value"]')).toHaveText('vinutha')
    //await page.waitForTimeout(30000)

    //await page.goto('https://demoqa.com/profile')
    //await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible();

})