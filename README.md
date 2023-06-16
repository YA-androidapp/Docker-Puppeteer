# Docker-Puppeteer

---

```powershell
Invoke-WebRequest https://raw.githubusercontent.com/puppeteer/puppeteer/main/examples/screenshot-fullpage.js -OutFile screenshot-fullpage.js

mkdir -p screenshot

podman build -t puppeteer-chrome-linux .

podman run -i --init --rm --cap-add=SYS_ADMIN -v "$(pwd)/screenshot:/home/pptruser/screenshot" --name puppeteer-chrome puppeteer-chrome-linux node -e "$($(gc screenshot-fullpage_updated.js) -join '')"
```

---

Copyright (c) 2023 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.
