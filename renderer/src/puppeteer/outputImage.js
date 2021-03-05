const puppeteer = require('puppeteer');

// 爬取网页并生成图片
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // 设置视窗的大小
    await page.setViewport({
        width: 100,
        height: 100,
        deviceScaleFactor: 2, // 对图片进行缩放或拉伸
    });
    await page.goto('http://localhost:8080/');
    await page.screenshot({ path: './example.png' });
    await browser.close();
})()