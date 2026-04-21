const { test, expect } = require('@playwright/test');

test('button click shows message text', async ({ page }) => {
  await page.goto('/');
  const message = page.locator('#message');
  await expect(message).toHaveCSS('opacity', '0');
  await page.click('#reveal-btn');
  await expect(message).toHaveCSS('opacity', '1');
  await expect(message).toContainText('It works!');
});
