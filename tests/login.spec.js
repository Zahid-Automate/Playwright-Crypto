const { test, expect } = require('@playwright/test');
require('dotenv').config();

test.beforeEach(async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  console.log(process.env.UN);
});


test.describe('Login Validation', () => {
    test('Able to login successfully', async ({ page }) => {
      // create a new todo locator
      await page.getByPlaceholder('Username').click();
      await page.getByPlaceholder('Username').fill(process.env.UN);
      await page.getByPlaceholder('Password').click();
      await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
      await page.getByRole('button', { name: 'Login' }).click();
      await page.pause();
    });
  });
  
  test.afterEach(async ({ page }) => {
  await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});