const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200
    });
    const page = await browser.newPage();

    await page.goto('http://localhost:8080/');
    // 设置窗口的大小
    await page.setViewport({
        width: 100,
        height: 100,
        deviceScaleFactor: 2, // 对图片进行缩放或拉伸
    });

    page.on('console', msg => console.log('page log: ', msg.text()));
    const dimensions = await page.evaluate(() => {
        // console.log(location.href);
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
            document: window.document
        }
    })
    console.log('dimensions:', dimensions);
    await browser.close();
})()