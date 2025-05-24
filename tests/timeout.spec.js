import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev', { timeout: 30000, waitUntil: 'networkidle' });
  await page.getByText('Get Started').click({ timeout: 10000,waitUntil: 'networkidle' });
});