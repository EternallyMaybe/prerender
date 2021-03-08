// 从html字符串中获取link、script、image链接

const oust = require('oust');

const hrefs = oust(`
<!DOCTYPEhtml>
<html lang="">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link href="/static/css/chunk-vendors1.css" rel="stylesheet">
    <link href="/static/css/chunk-vendors2.css" rel="stylesheet">
    <link href="/static/css/chunk-vendors3.css">
    <title>title</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`, 'links');
console.log(hrefs);