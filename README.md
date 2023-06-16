# Docker-Puppeteer

---

```powershell
Invoke-WebRequest https://raw.githubusercontent.com/puppeteer/puppeteer/main/examples/screenshot-fullpage.js -OutFile screenshot-fullpage.js

mkdir -p screenshot

podman build -t puppeteer-chrome-linux .

# podman run -i --init --rm --cap-add=SYS_ADMIN -v "C:/Users/Y/Documents/GitHub/Docker-Puppeteer/screenshot:/home/pptruser/screenshot" --name puppeteer-chrome puppeteer-chrome-linux node -e "`cat screenshot-fullpage.js`"
podman run -i --init --rm --cap-add=SYS_ADMIN -v "C:/Users/Y/Documents/GitHub/Docker-Puppeteer/screenshot:/home/pptruser/screenshot" --name puppeteer-chrome puppeteer-chrome-linux node -e "'use strict';const puppeteer = require('puppeteer');(async () => {  const browser = await puppeteer.launch({    headless: 'new'  });  const page = await browser.newPage();  await page.emulate(puppeteer.devices['iPhone 6']);  await page.goto('https://www.nytimes.com/');  await page.screenshot({ path: 'screenshot/full.png', fullPage: true });  await browser.close();})();"
```

---

Copyright (c) 2023 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
