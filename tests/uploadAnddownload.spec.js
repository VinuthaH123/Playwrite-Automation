import {test,expect} from '@playwright/test'

/* Playwright simplifies file automation without requiring external libraries.
   Playwright provides built-in support for file uploads and downloads.
 */

test('Upload files', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('./test-data/test.jpeg')
    await page.waitForTimeout(3000)
    await page.locator('#file-submit').click()
    await page.waitForTimeout(3000)
    await expect(page.getByText('File Uploaded!')).toBeVisible()
})

test.skip('Download files', async({page})=>{
    await page.goto('https://demo.automationtesting.in/FileDownload.html')
    const [download] = await Promise.all([
         page.waitForEvent('download'),
         page.locator('.btn.btn-primary').click(),
        ])

    console.log(`File Downloaded at: ${await download.path()}`);
})
