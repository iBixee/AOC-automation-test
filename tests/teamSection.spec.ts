import { test, expect } from '@playwright/test';
import { navigateToHomepage } from '../utils/utils';



test.describe('Team section', () => {
  test.beforeEach(async ({ page }) => {
    await navigateToHomepage(page);
  });



  
});