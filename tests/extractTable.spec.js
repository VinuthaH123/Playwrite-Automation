import { test, expect } from '@playwright/test';

  // Launch browser
test('test', async ({ page }) => {

  // Navigate to the target page
  await page.goto('https://practice.expandtesting.com/tables');

  // Wait for the table to be visible
  await page.waitForSelector('table');

  // Select the first table on the page
  const table = await page.$('table');

  // Extract table headers
  const headers = await table.$$eval('thead tr th', headers => headers.map(header => header.innerText.trim()));

  // Extract table rows
  const rows = await table.$$eval('tbody tr', rows => {
    return rows.map(row => {
      const cells = Array.from(row.querySelectorAll('td'));
      return cells.map(cell => cell.innerText.trim());
    });
  });

  // Print the table data
  console.log(headers.join(' | '));
  rows.forEach(row => {
    console.log(row.join(' | '));
  });

  // Close browser
})
