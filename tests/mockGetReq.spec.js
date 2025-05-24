import { test, expect } from '@playwright/test';

test("Mock API requests : mocks a fruit and doesn't call api", async ({ page }) => {
    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [{ name: 'Strawberry', id: 21 }];
        await route.fulfill({ json });
    });
    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the Strawberry fruit is visible
    await expect(page.getByText('Strawberry')).toBeVisible();
})

test('Modify API responses: gets the json from api and adds a new fruit', async({page})=>{
   // Get the response and add to it

    await page.route('*/**/api/v1/fruits', async route =>{
        const response = await route.fetch()
        const json = await response.json()
        json.push({name: 'Loquat', id: 100})
        await route.fulfill({json})
    })

    await page.goto('https://demo.playwright.dev/api-mocking');
    await page.waitForTimeout(1000)
    await expect(page.getByText('Loquat', { exact: true })).toBeVisible();
})
