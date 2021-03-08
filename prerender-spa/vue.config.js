const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin');

module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;

        return {
            plugins: [
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname,'dist'),
                    routes: ['/'],
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        headless: false,
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
                new HtmlCriticalWebpackPlugin({
                    base: path.join(__dirname, 'dist'),
                    src: 'index.html',
                    dest: 'index.html',
                    target: {
                        uncritical: 'uncritical.css',
                    },
                    inline: true,
                    minify: true,
                    width: 1400,
                    height: 900,
                    penthouse: {
                        blockJSRequests: false
                    }
                })
            ]
        }
    }
}