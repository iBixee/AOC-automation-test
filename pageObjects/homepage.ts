import { Page } from '@playwright/test';

//Page logo navigation

export const logoButton = (page: Page) => {
  return page.locator('.img-logo');
};

export const scrollToBottomLogo = async (page: Page) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
};

export const logoIsAtTopOfPage = async (page: Page) => {
  const scrollPosition = await page.evaluate(() => window.scrollY);
  return scrollPosition === 0;
};



//Navbar Elements
export const ourMissionBtn = (page) => {
    return page.locator('#top-redirect > nav > div.nav__links > ul > li:nth-child(1)')
}

export const ourMissionTitle = (page) => {
    return page.locator('.our-mission__content__title');
}

export const howYouCouldHelpBtn = (page) => {
    return page.locator('#top-redirect > nav > div.nav__links > ul > li:nth-child(2)')
}

export const howYouCouldHelpTitle = (page) => {
    return page.locator('.how-contribute__title');
}

export const whyYouShouldHelpBtn = (page) => {
    return page.locator('#top-redirect > nav > div.nav__links > ul > li:nth-child(3)')
}

export const whyYouShoulHelpTitle = (page) => {
    return page.locator('.why-contribute__title');
}

export const teamBtn = (page) => {
    return page.locator('#top-redirect > nav > div.nav__links > ul > li:nth-child(4)')
}

export const teamTitle = (page) => {
    return page.locator('.team__title');
}

//Carousel area
export const arrowRightBtn = (page: Page) => {
  return page.locator('#arrow-right');
};

export const carouselJobCard = (page, itemNumber: number, totalItems: number) => {
  return page.locator(`xpath=//div[@class="how-contribute__job" and @role="group" and contains(@aria-label, "${itemNumber} / ${totalItems}")]`);
};

export const detailsBtn = (page, itemNumber: number, totalItems: number) => {
  return page.locator(`xpath=//div[@class="how-contribute__job" and @role="group" and contains(@aria-label, "${itemNumber} / ${totalItems}")]//a[@class="detail-btn"]`);
};

export const navigateToCarousel = async (page: Page) => {
  await page.goto('https://oportunitatisicariere.ro/');
};

export const clickArrowRightBtn = async (page: Page) => {
  await arrowRightBtn(page).click();
  await page.waitForTimeout(200); 
};

export const isCarouselJobCardVisible = async (page: Page, itemNumber: number, totalItems: number) => {
  return await carouselJobCard(page, itemNumber, totalItems).isVisible();
};

export const clickDetailsButton = async (page: Page, itemNumber: number, totalItems: number) => {
  const jobLinkLocator = detailsBtn(page, itemNumber, totalItems);
  const jobId = await jobLinkLocator.getAttribute('data-id');
  await jobLinkLocator.click();
  return jobId;
};

export const goBackToCarousel = async (page: Page) => {
  await page.goBack();
  await page.waitForLoadState('load');
};


//Scroll up Button
export const scrollUpButton = (page: Page) => {
  return page.locator('.top-redirect-btn'); 
};

export const scrollToBottom = async (page: Page) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
};

export const isAtTopOfPage = async (page: Page) => {
  const scrollPosition = await page.evaluate(() => window.scrollY);
  return scrollPosition === 0;
};

export const getButtonBackgroundColor = async (page: Page) => {
    return await page.locator('.top-redirect-btn').evaluate(node => window.getComputedStyle(node).backgroundColor);   
};


//Social link icons
export const socialLinkIcons = (page: Page) => {
  return page.locator('.footer-social__links li a');
};

export const footerSocialIconBackgroundColor = async (page: Page, index: number) => {
  return await socialLinkIcons(page).nth(index).locator('img').evaluate(node => window.getComputedStyle(node).color);
};

export const hoverOverFooterSocialIcon = async (page: Page, index: number) => {
  await socialLinkIcons(page).nth(index).hover();
};


//Footer social links
export const footerSocialIcons = (page: Page) => {
  return page.locator('.footer-social__links li a');
};






