'use strict';

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });
  const page = await browser.newPage();
  await page.emulate(puppeteer.devices['iPhone 6']);
  await page.goto('https://www.nytimes.com/');
  await page.screenshot({ path: 'screenshot/full.png', fullPage: true });
  await browser.close();
})();
