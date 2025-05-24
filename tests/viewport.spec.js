import {test} from '@playwright/test'

test.use({
    viewport: { width: 400, height: 600}
})

test('verify viewport', async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
})