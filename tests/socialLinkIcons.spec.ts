import { test, expect } from '@playwright/test';
import { navigateToHomepage } from '../utils/utils';
import { socialLinkIcons as socialLinkIcons, scrollToBottom } from '../pageObjects/homepage';
  
const expectedUrls = [
  'https://www.linkedin.com/company/asociatia-oportunitati-si-cariere/',
  'https://www.instagram.com/peviitor.ro/',
  'https://discord.gg/KPMkdUfQNu',
  'https://github.com/peviitor-ro/oportunitatisicariere/issues',
  'https://meet.jit.si/PEVIITOR.RO',
  'https://dev.to/t/oportunitatisicariere/latest'
];

test.describe('Footer Social Icons', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHomepage(page);
  });

  test('Verify that the social icons lead to the correct pages', async ({ page }) => {
    await scrollToBottom(page);
    // await page.waitForTimeout(2000); 

    for (let i = 0; i < expectedUrls.length; i++) {
      const url = await socialLinkIcons(page).nth(i).getAttribute('href');
      console.log(`Social icon ${i + 1} URL: ${url}`);
      expect(url).toBe(expectedUrls[i]);
    }
  });

  
});


