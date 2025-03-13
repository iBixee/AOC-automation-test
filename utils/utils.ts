import { Page } from '@playwright/test';

export const navigateToHomepage = async (page: Page) => {
  await page.goto('https://oportunitatisicariere.ro/');
};
