const path = require('path');
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin');

module.exports = {
    css: {
        extract: true
    },
    pages: {
        app1: {
            entry: 'src/pages/page1/main.js',
        },
        app2: {
            entry: 'src//pages/page2/main.js',
        }
    },
    configureWebpack: (config) => {
        config.plugins.push(new SkeletonWebpackPlugin({
            webpackConfig: {
                entry: {
                    app1: path.join(__dirname, './src/pages/page1/skeleton.js'),
                    app2: path.join(__dirname, './src/pages/page2/skeleton.js')
                }
            },
            minimize: true,
            quiet: true,
            router: {
                mode: 'hash',
                routes: [
                    {
                        path: '/router1',
                        skeletonId: 'skeletonId1',
                        entryName: 'app1'
                    },
                    {
                        path: '/router2',
                        skeletonId: 'skeletonId2',
                        entryName: 'app1'
                    },
                    {
                        path: '/router1',
                        skeletonId: 'skeletonId3',
                        entryName: 'app2'
                    },
                    {
                        path: '/router2',
                        skeletonId: 'skeletonId4',
                        entryName: 'app2'
                    }
                ]
            }
        }));
    },
    
}