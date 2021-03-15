const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:8080/app2.html#/about');
    // 设置窗口的大小
    await page.setViewport({
        width: 1400,
        height: 900,
        deviceScaleFactor: 2, // 对图片进行缩放或拉伸
    });

    const content = await page.content();
    fs.writeFileSync('./hash-about.html', content);
    await browser.close();
})();