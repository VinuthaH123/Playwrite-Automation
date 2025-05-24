import{test,expect} from '@playwright/test'
test('Selectors', async({page}) => {
    await page.goto('file:///C:/Users/Vishnu/Desktop/index.html')
    await page.getByPlaceholder('Enter Name').fill('asdf')
    await page.getByPlaceholder('Enter Email').fill('abc@getMaxListeners.com')
    await page.getByPlaceholder('Enter Password').fill('yz')

    // Click the label with text 'Male'
//await page.getByLabel('Female').check();
await page.locator('[type="radio"]').nth(1).check()
await expect(page.locator('[type="radio"]').nth(1)).toBeChecked()
await page.locator('[type="checkbox"]').nth(2).check()
await expect(page.locator('[type="checkbox"]').nth(2)).toBeChecked()
    
await page.selectOption('select[name="state"]', { label: 'Tamil Nadu' });
//   await page.selectOption('select[name="state"]', { value: 'MH' }); // by value
//  // await page.selectOption('select[name="state"]', { index: 2 });     // by index
await page.selectOption('select[name="hobbies"]', [
    { label: 'Music' },
    { label: 'Gaming' },
  ]);
  await page.getByRole('button', { name: 'Sign up' }).click();

  // Optional: Assertion for successful navigation
  await expect(page).toHaveURL('file:///C:/Users/Vishnu/Desktop/courses.html');
});


