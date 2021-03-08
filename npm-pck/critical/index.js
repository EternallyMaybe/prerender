const critical = require('critical');

critical.generate({
    inline: true,
    base: '../dist/',
    css: ['../dist/other.css', './dist/main.css'],
    src: 'index.html',
    target: {
      html: 'index-critical.html',
      uncritical: 'uncritical.css',
    },
    width: 1300,
    height: 900,
  });