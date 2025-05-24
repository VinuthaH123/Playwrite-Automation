import { test, expect } from '@playwright/test'

test('Get element by title attribute on Wikipedia', async ({ page }) => {
  await page.goto('https://www.wikipedia.org')

  const englishLink = page.locator('[title="English — Wikipedia — The Free Encyclopedia"]')
  await expect(englishLink).toBeVisible()

  await englishLink.click()

  await expect(page).toHaveURL(/en\.wikipedia\.org/)
})
