const { test, expect } = require('@playwright/test');
const path = require('path');

test('button click shows message text', async ({ page }) => {
  const filePath = 'file://' + path.resolve('./index.html').replace(/\\/g, '/');
  await page.goto(filePath);
  const message = page.locator('#message');
  await expect(message).toHaveCSS('opacity', '0');
  await page.click('#reveal-btn');
  await expect(message).toHaveCSS('opacity', '1');
  await expect(message).toContainText('It works!');
});
