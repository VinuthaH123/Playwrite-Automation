import { test, expect } from '@playwright/test';

test('Wikipedia UI tests', async ({ page }) => {
  // 1. Navigate to Wikipedia's homepage
  await page.goto('https://www.wikipedia.org/');
  await page.click('#js-link-box-en'); // English

  // 2. Assert there are less than 7,000,000 articles in English
  const articleCountText = await page.locator('#articlecount a').textContent();
  const articleCount = parseInt(articleCountText.replace(/[^0-9]/g, ''), 10);
  expect(articleCount).toBeLessThan(7000000);

  // 3. Assert the page's text gets smaller when the 'Small' text size option is selected
  await page.locator('button[title="Change text size"]').click();
  await page.locator('button[title="Small"]').click();
  const smallSize = await page.locator('body').evaluate(el => getComputedStyle(el).fontSize);

  // 4. Assert the page's text gets larger when the 'Large' text size option is selected
  await page.locator('button[title="Large"]').click();
  const largeSize = await page.locator('body').evaluate(el => getComputedStyle(el).fontSize);
  expect(parseFloat(largeSize)).toBeGreaterThan(parseFloat(smallSize));

  // 5. Assert the page's text goes back to default size when the 'Standard' text size option is selected
  await page.locator('button[title="Standard"]').click();
  const standardSize = await page.locator('body').evaluate(el => getComputedStyle(el).fontSize);
  expect(parseFloat(standardSize)).toBeGreaterThan(parseFloat(smallSize));
  expect(parseFloat(standardSize)).toBeLessThan(parseFloat(largeSize));
});
