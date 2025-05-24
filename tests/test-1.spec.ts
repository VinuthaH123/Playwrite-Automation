import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.instagram.com/');
  await page.getByRole('main').click();
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number or Email' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number or Email' }).fill('123456789');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number or Email' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number or Email' }).fill('1234567890');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567890');
  await page.locator('div').filter({ hasText: /^Show$/ }).first().click();
  await page.locator('div').filter({ hasText: /^Hide$/ }).first().click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567891');
  await page.getByRole('button', { name: 'Show' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).click();
  await page.getByRole('textbox', { name: 'Full Name' }).fill('ABCD');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('abcd');
  await page.getByRole('button', { name: 'Sign up' }).click();
});
