import {test,expect} from '@playwright/test'
test('Keyboard-Actions', async ({page}) => {
    await page.goto('https://textbox.johnjago.com/') 
    await page.keyboard.type('Hello World!');
await page.keyboard.press('ArrowLeft');

await page.keyboard.down('Shift');
for (let i = 0; i < ' World'.length; i++)
  await page.keyboard.press('ArrowLeft');
await page.keyboard.up('Shift');

await page.keyboard.press('Backspace');
// Result text will end up saying 'Hello!'
await page.keyboard.press('Shift+A');
//await page.keyboard.press('Control+A');
await page.keyboard.press('Control+A');

// (Optional) You can now delete it, for example:
await page.keyboard.press('Backspace');
await page.keyboard.down('v');
 
     
})