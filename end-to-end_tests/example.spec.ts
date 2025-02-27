import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://automationteststore.com/');
  // Expect the title to be Automation Test Store.
  await expect(page).toHaveTitle("A place to practice your automation skills!");
});


test('has login', async ({ page }) => {
  await page.goto('https://automationteststore.com/');
  // Expect a button with the text "Login or register" to be visible.
  await expect(page.getByRole('link', { name: 'Login or register' })).toBeVisible();
});

test('specials link', async ({ page }) => {
  await page.goto('https://automationteststore.com/');
  // Click the get started link.
  await page.getByRole('link', { name: 'SPECIALS' }).click();
  // Expects page to have a heading with the name of Special Offers.
  await expect(page.getByRole('heading', { name: 'Special Offers' })).toBeVisible();
});
