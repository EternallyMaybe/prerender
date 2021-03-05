const fs = require('fs');
const jsdom = require('jsdom/lib/old-api');
const serializeDocument = require('jsdom/lib/old-api.js').serializeDocument

jsdom.env(
    '<div id="app"><a class="link" href="https://video.kuaishou.com/">jsdom!</a></div>',
    ["http://code.jquery.com/jquery.js"],
    function (err, window) {
        if (err) throw err;
        fs.writeFileSync('./index1.html', serializeDocument(window.document));
    }
);
