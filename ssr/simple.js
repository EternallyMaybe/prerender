const Vue = require('vue');
const fs = require('fs');

const template = fs.readFileSync('./src/index.temp.html', 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
    template,
});

const app = new Vue({
    template: '<div><div>{{ name }}</div><div>{{ age }}</div></div>',
    data() {
        return {
            name: 'name',
            age: 20
        }
    }
});

const renderStream = renderer.renderToStream(app, {
    title: 'title'
});

let html = '';
renderStream.on('data', data => {
    html += data.toString();
});

renderStream.on('end', () => {
    console.log(html);
});
