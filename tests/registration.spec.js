import { test, expect } from '@playwright/test'
import userData from '../test-data/testData.json';
import { TIMEOUT } from 'dns';

test('User Registration Flow', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  const email = `${userData.email}.${Date.now()}@example.com`;
  await page.getByPlaceholder('Name').fill(userData.name);
  await page.getByPlaceholder('Email Address').nth(1).fill(email);
  await page.getByRole('button', { name: 'Signup' }).click();

  await page.waitForSelector('form[action="/signup"]');
  await page.locator('[id="uniform-id_gender1"]').check();
  await page.waitForTimeout(30000)
  await page.getByLabel('Password').fill(userData.password);
  await page.selectOption('#days', userData.dob.day);
  await page.selectOption('#months', userData.dob.month);
  await page.selectOption('#years', userData.dob.year);
  await page.getByLabel('Sign up for our newsletter!').check();
  await page.getByLabel('Receive special offers from our partners!').check();
  await page.getByLabel('First name').fill(userData.firstName);
  await page.getByLabel('Last name').fill(userData.lastName);
  await page.getByLabel('Company').nth(0).fill(userData.company);
  await page.getByLabel('Address').nth(0).fill(userData.address1);
  await page.getByLabel('Address 2').fill(userData.address2);
  await page.getByLabel('Country').selectOption(userData.country);
  await page.getByLabel('State').fill(userData.state);
  await page.getByLabel('City').fill(userData.city);
  await page.getByLabel('Zipcode').fill(userData.zipcode);
  await page.getByLabel('Mobile Number').fill(userData.mobile);

  await page.getByRole('button', { name: 'Create Account' }).click({timeout:30000})
  await page.waitForTimeout(30000)
  await expect(page).toHaveURL('https://automationexercise.com/account_created')
    await expect(page.locator('[data-qa="account-created"]')).toHaveText('Account Created!')
});
