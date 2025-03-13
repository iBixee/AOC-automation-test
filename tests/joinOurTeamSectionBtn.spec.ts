import { test, expect } from '@playwright/test';
import { navigateToHomepage } from '../utils/utils';
import { scrollToBottom } from '../pageObjects/homepage'
 
test.describe('Join our Team Discord channel button', () => { 
  test.beforeEach(async ({ page }) => { 
    await navigateToHomepage(page); 
  });

  test('Verify that the Join our Team Discord button leads to the Discord channel', async ({ page, context }) => {
    await scrollToBottom(page);

    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('a.join-us-section__button'),
    ]);
  
    await newPage.waitForLoadState('load');
    await expect(newPage.url()).toBe('https://discord.com/invite/KPMkdUfQNu');
  });
});
  
    