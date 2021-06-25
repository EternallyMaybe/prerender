const postcss = require('postcss');
const discard = require('postcss-discard'); // 去重插件
const cssStr1 = `
    body {
        background: red;
    }
`;
const cssStr2 =  `
body {
    background: red;
}
#app {
    background: white;
}
`;

// 利用postcss将cssStr1解析成ast语法树，并遍历语法树生成一个选择器和内容的映射表，cssStr2也生成语法树，从映射表去查找有没有相同的值，有则移除
console.log(postcss(discard({css: cssStr1})).process(cssStr2).css)