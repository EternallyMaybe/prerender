const penthouse = require('penthouse');
penthouse({
    url: 'https://www.baidu.com/',
    cssString: 'body { color: red } .test {position: absolute;}'
})
.then(criticalCss => {
    console.log(criticalCss);
})