const fs = require('fs');
const jsdom = require('jsdom/lib/old-api');
const serializeDocument = require('jsdom/lib/old-api.js').serializeDocument

jsdom.env({
    url: 'https://video.kuaishou.com/?utm_source=wwwkuaishoucom&utm_medium=wwwkuaishoucom&utm_campaign=wwwkuaishoucom&location=wwwkuaishoucom',
    scripts: ["http://code.jquery.com/jquery.js"],
    done: function (err, window) {
        if (err) throw err;
        // console.log(window.document);
       
        fs.writeFileSync('./index3.html', serializeDocument(window.document));
        window.close();
        
    }
});