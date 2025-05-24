import { test, expect } from '@playwright/test';

test('Complete signup form automation', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');

  // Fill text fields
  await page.getByPlaceholder('Enter Name').fill('Playwright Tester');
  await page.getByPlaceholder('Enter Email').fill('testuser123@example.com');
  await page.getByPlaceholder('Enter Password').fill('SecurePass@123');

  // Select gender (radio button)
  await page.locator('input[type="radio"][value="Male"]').check();

  // Select multiple interests (checkboxes)
  await page.locator('input[type="checkbox"][value="Coding"]').check();
  await page.locator('input[type="checkbox"][value="Reading"]').check();

  // Select state from dropdown (using text/label)
  await page.selectOption('select[name="state"]', { label: 'Tamil Nadu' });

  // You could also use:
  // await page.selectOption('select[name="state"]', { value: 'MH' }); // by value
  // await page.selectOption('select[name="state"]', { index: 2 });     // by index

  // Multi-select hobbies
  await page.selectOption('select[name="hobbies"]', [
    { label: 'Music' },
    { label: 'Gaming' },
  ]);

  // Submit the form
  await page.getByRole('button', { name: 'Sign up' }).click();

  // Optional: Assertion for successful navigation
  await expect(page).toHaveURL(/.*courses/);
});
