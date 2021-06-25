const penthouse = require('penthouse');

// css-tree将css转换成语法树，之后从语法树提取选择器，然后puppeteer会访问HTML，利用这些选择器去html去查找，能找到对应元素就不过滤
// 得到关键css的选择器，然后从语法树上移除未使用的选择器，最后把语法树转换成css样式
penthouse({
    url: 'https://www.baidu.com/',
    cssString: 'body { color: red } .test {position: absolute;}'
})
.then(criticalCss => {
    console.log(criticalCss);
})