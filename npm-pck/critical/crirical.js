const critical = require('critical');

critical.generate({
    inline: true,
    base: '../dist/',
    src: 'index.html',
    // css: ['dist/main.css'],
    // target: {
    //     css: 'critical.min.css',
    //     html: 'index.critical.html',
    //     uncritical: 'uncritical.css',
    // },
    minify: false,
    dimensions: [
        {
            height: 200,
            width: 500,
        }, 
        {
            height: 900,
            width: 1200
        }
    ]
}, (err, { css, html, uncritical }) => {
    console.log('css: \n', css);
    console.log('html: \n', html);
    console.log('uncritical: \n', uncritical);
})
