const inline = require('inline-critical');
const fs = require('fs');
const html = fs.readFileSync('../dist/index.html', 'utf8');
const critical = fs.readFileSync('../dist/other.css', 'utf8');

console.log('html: \n', html);
console.log('critical: \n', critical);

// 从html当中获取内敛样式以及外联样式，比对内敛样式与关键css，从关键css移除相同样式，内敛到HTML中，再比对所有内敛样式与外联样式，移除外联中相同样式
// 去重使用postcss-discard，使用参考postcss
const inlined = inline(html, critical, {
  extract: true,
  basePath: '../dist'
});
console.log('inlined: \n', inlined.toString());