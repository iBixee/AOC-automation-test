import { test, expect } from '@playwright/test';


test.describe('Navbar', () => {
  test.beforeEach(async({page}) => {
    await page.goto('https://oportunitatisicariere.ro/');
  });
  test('Nav - Misiunea noastră', async ({ page }) => {
    await page.locator('#top-redirect > nav > div.nav__links > ul > li:nth-child(1)').click()
  });

  test('Verify that the "Alătură-te" button navigates to the Discord channel', async({page}) => {
   await page.locator('.join-btn').click()
  });
  
  test('Nav - Cum poți ajuta tu?', async ({ page }) => {
    await page.locator('#top-redirect > nav > div.nav__links > ul > li:nth-child(2)').click()
  });
  
  test('Nav - De ce să ajuți?', async ({ page }) => {
    await page.locator('#top-redirect > nav > div.nav__links > ul > li:nth-child(3)').click()
  });
  
  test('Nav - Echipa', async ({ page }) => {
    await page.locator('#top-redirect > nav > div.nav__links > ul > li:nth-child(4)').click()
    await page.goBack();
  });

  test('Nav button', async({page}) => {
   page.getByRole('button', { name: 'Alătură-te'});  });

  test('Detalii btn', async({page}) => {
    await page.waitForSelector('.how-contribute__job .detail-btn');
    const detaliiButtons = page.locator('.how-contribute__job .detail-btn');
    const buttonCount = await detaliiButtons.count();
    expect(buttonCount).toBe(34);
    for (let i = 0; i < buttonCount; i++) {
      await detaliiButtons.nth(i).click();
      await expect(page).toHaveURL(/details\.html\?id=.*/);
      await page.goBack();
    }
  });

  test('Verify the main page arrows - left and right', async({page}) => {
    await page.locator('#arrow-left').click();
    await page.locator('#arrow-right').click();

  });

  
})

  
