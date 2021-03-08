const Vue = require('vue');
const app = new Vue({
    template: '<div><div>{{ name }}</div><div>{{ age }}</div></div>',
    data() {
        return {
            name: 'name',
            age: 20
        }
    }
});

const renderer = require('vue-server-renderer').createRenderer();

// renderer.renderToString(app, (err, html) => {
//     console.log(html);
// })

// renderer.renderToString(app).then(html => {
//     console.log(html);
// })


const renderStream = renderer.renderToStream(app);
let html = '';
renderStream.on('data', data => {
    html += data.toString();
});

renderStream.on('end', () => {
    console.log(html);
});
