import { test, expect } from '@playwright/test';
import * as homepage from '../pageObjects/homepage'
import { navigateToHomepage } from '../utils/utils';
import { logoButton, scrollToBottomLogo, logoIsAtTopOfPage } from '../pageObjects/homepage';


test.describe('Navigation', () => { 
  test.beforeEach(async ({ page }) => { 
    await navigateToHomepage(page); 
  });


  test('Verify that the logo button returns the page to the top', async ({ page }) => {
    await scrollToBottomLogo(page);
    await page.waitForTimeout(2000); 

    await logoButton(page).click();
    await page.waitForTimeout(2000);
    
    const isTop = await logoIsAtTopOfPage(page);
    await page.waitForTimeout(5000);
    expect(isTop).toBe(true);
  });

});