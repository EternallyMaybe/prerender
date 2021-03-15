const inline = require('inline-critical');
const fs = require('fs');
const html = fs.readFileSync('../dist/index.html', 'utf8');
const critical = fs.readFileSync('../dist/main.css', 'utf8');

console.log('html: \n', html);
console.log('critical: \n', critical);

const inlined = inline(html, critical, {
  extract: true,
  basePath: '../dist'
});
console.log('inlined: \n', inlined.toString());