const fs = require('fs');
const jsdom = require('jsdom/lib/old-api');
const serializeDocument = require('jsdom/lib/old-api.js').serializeDocument

jsdom.env(
    'https://video.kuaishou.com/?utm_source=wwwkuaishoucom&utm_medium=wwwkuaishoucom&utm_campaign=wwwkuaishoucom&location=wwwkuaishoucom',
    ["http://code.jquery.com/jquery.js"],
    function (err, window) {
        if (err) throw err;

        fs.writeFileSync('./index2.html', serializeDocument(window.document)); 
    }
);