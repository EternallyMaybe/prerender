/**
 * 使用puppeteer登录Stack Overflow，并获取包含个人信息节点
 */
const puppeteer = require('puppeteer');

async function getElement(page, selector) {
    const elHandle = await page.$(selector);
    if (!elHandle) return;

    return await page.evaluate(el => el.outerHTML, elHandle);
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://stackoverflow.com/users/login?ssrc=head&returnurl=https%3a%2f%2fstackoverflow.com%2f');
    console.log('before login: \n', await getElement(page, '.my-profile'));
    
    // 模拟输入
    await page.type('#email',"908624042@qq.com");
    await page.type('#password','ab12345678');

    // 点击和跳转需要并发执行
    await Promise.all([
        page.click('#submit-button'),
        page.waitForNavigation({
          waitUntil: 'networkidle0',
        }),
    ]);
    console.log('after login: \n', await getElement(page, '.my-profile'));

    await browser.close();
})()