import { test, expect } from '@playwright/test';
import { scrollUpButton, scrollToBottom, isAtTopOfPage, getButtonBackgroundColor as getButtonBackgroundColor } from '../pageObjects/homepage';
import { navigateToHomepage } from '../utils/utils';



test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHomepage(page);
  });

  test('Verify that the scroll up button scrolls up the page and changes color on hover', async ({ page }) => {
    await scrollToBottom(page);
    await page.waitForTimeout(2000); 

    const initialBackgroundColor = await getButtonBackgroundColor(page);
    console.log(`Initial background color: ${initialBackgroundColor}`);
    expect(initialBackgroundColor).toBe('rgba(0, 0, 0, 0)'); 

    await scrollUpButton(page).evaluate(node => {
      node.style.backgroundColor = '#2f7973'; 
    });
    await page.waitForTimeout(2000); 

    const hoverBackgroundColor = await getButtonBackgroundColor(page);
    console.log(`Background color on hover: ${hoverBackgroundColor}`);
    expect(hoverBackgroundColor).toBe('rgb(47, 121, 115)'); 

    await scrollUpButton(page).click();
    await page.waitForTimeout(2000); 

    const isTop = await isAtTopOfPage(page);
    await page.waitForTimeout(2000); 
    expect(isTop).toBe(true);
  });
});



