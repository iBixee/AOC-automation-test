import { test, expect } from '@playwright/test';
import { navigateToCarousel, clickArrowRightBtn, isCarouselJobCardVisible, clickDetailsButton, goBackToCarousel } from '../pageObjects/homepage.ts'
import { navigateToHomepage } from '../utils/utils';


test.describe('Navigation', () => { 
  test.beforeEach(async ({ page }) => { 
    await navigateToHomepage(page); 
  });


test('Carousel items redirect to the correct pages', async ({ page }) => {
  test.setTimeout(120000);
  await navigateToCarousel(page);

  const getRandomStartingPoint = (max: number) => {
    return Math.floor(Math.random() * max) + 1;
  };

  const randomStart = getRandomStartingPoint(34);
  const totalItems = 34;

  for (let i = randomStart; i <= totalItems; i++) {
    let itemFound = false;
    for (let j = 0; j < totalItems; j += 5) { 
      await clickArrowRightBtn(page);
      if (await isCarouselJobCardVisible(page, i, totalItems)) {
        itemFound = true;
        break;
      }
    }

    if (itemFound) {
      const jobId = await clickDetailsButton(page, i, totalItems);
      await page.waitForLoadState('load');
      
      await expect(page).toHaveURL(`https://oportunitatisicariere.ro/details.html?id=${jobId}`);
      await goBackToCarousel(page);
      await clickArrowRightBtn(page); 
    }
  }
});

});





