import { test, expect } from '@playwright/test';

test('has internal title', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  const locator = page.locator('.page-title');
  await expect(locator).toHaveText('React Playground');
});