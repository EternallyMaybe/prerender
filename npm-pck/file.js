const fs = require('fs').promises;
fs.readFile('./dist/index.html').then(console.log);