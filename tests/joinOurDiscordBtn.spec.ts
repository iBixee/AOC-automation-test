import { test, expect } from '@playwright/test';
import { navigateToHomepage } from '../utils/utils';


test.describe('Join our Discord channel button', () => { 
  test.beforeEach(async ({ page }) => { 
    await navigateToHomepage(page); 
  });



test('Verify that the Join our Discord button leads to the Discord channel', async ({ page, context }) => {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('button.join-btn.btn--green'),
  ]);

  await newPage.waitForLoadState('load');
  await expect(newPage.url()).toBe('https://discord.com/invite/KPMkdUfQNu');
});

});







