const { SkeletonPlugin } = require('page-skeleton-webpack-plugin');
const path = require('path');

module.exports = {
    chainWebpack: (config) => {
        if (process.env.NODE_ENV !== 'development') {
            config.plugin('html').tap(opts => {
                opts[0].minify.removeComments = false;
                return opts;
            })
        }
    },
    configureWebpack: (config) => {
        config.plugins.push(new SkeletonPlugin({
            pathname: path.join(__dirname, './shell'),
            staticDir: path.join(__dirname, './dist'),
            routes: ['/'],
        }));
    },
}