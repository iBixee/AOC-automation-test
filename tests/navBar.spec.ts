import { test, expect } from '@playwright/test';
import * as homepage from '../pageObjects/homepage'
import { navigateToHomepage } from '../utils/utils';


test.describe('Navigation', () => { 
  test.beforeEach(async ({ page }) => { 
    await navigateToHomepage(page); 
  });


  test('Verify that the "Misiunea Noastra" btn is scrolling to its page section', async ({ page }) => {
    await homepage.ourMissionBtn(page).click();
    await expect(homepage.ourMissionTitle(page)).toBeInViewport();
  });

  test('Verify that the "Cum poți ajuta tu?" btn is scrolling to its page section', async ({ page }) => {
    await homepage.howYouCouldHelpBtn(page).click();
    await expect(homepage.howYouCouldHelpTitle(page)).toBeInViewport();
  });

  test('Verify that the "De ce să ajuți?" btn is scrolling to its page section', async ({ page }) => {
    await homepage.whyYouShouldHelpBtn(page).click();
    await expect(homepage.whyYouShoulHelpTitle(page)).toBeInViewport();
  });

  test('Verify that the "Echipa" btn is scrolling to its page section', async ({ page }) => {
    await homepage.teamBtn(page).click();
    await expect(homepage.teamTitle(page)).toBeInViewport();
  });
});
  
