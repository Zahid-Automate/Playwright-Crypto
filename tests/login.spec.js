const { test, expect } = require('@playwright/test');
const encryption = require('../utils/encryption');
require('dotenv').config();

test.beforeEach(async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

test.describe('Login Validation', () => {
    test('Able to login successfully', async ({ page }) => {
        const username = encryption.decrypt(process.env.ENCRYPTED_UN);
        const password = encryption.decrypt(process.env.ENCRYPTED_PASSWORD);

        // Use the decrypted credentials
        await page.getByPlaceholder('Username').click();
        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Password').click();
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Login' }).click();
        await page.pause();
    });
});

test.afterEach(async ({ page }) => {
    await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.close();
});