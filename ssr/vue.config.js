const path = require('path');
const nodeExternals = require('webpack-node-externals');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const merge = require('lodash.merge');

const TARGET_NODE = process.env.WEBPACK_TARGET === 'node';
const entry = TARGET_NODE ? 'server' : 'client';
const isPro = process.env.NODE_ENV !== 'development';

let vueConfig = {
    publicPath: isPro ? '/' : 'http://127.0.0.1:8080/',
    outputDir: 'dist',
    pages: {
        index: {
            entry: `src/entry-${entry}.js`,
        }
    },
    css: {
        extract: isPro,
        sourceMap: isPro,
    },
    chainWebpack: (config) => {
        // 关闭vue-loader中默认的服务器端渲染函数
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap((options) => {
                merge(options, {
                    optimizeSSR: false,
                });
            });
        
        // 移除css-loader
        if (TARGET_NODE) {
            const langs = ["css", "postcss", "scss", "sass", "less", "stylus"];
            const types = ["vue-modules", "vue", "normal-modules", "normal"];
            for (const lang of langs) {
                for (const type of types) {
                let rule = config.module.rule(lang).oneOf(type)
                rule.uses.clear();
                rule.use().loader('null-loader');
                }
            }
        }

        // 移除HTML文件
        isPro && Object.keys(vueConfig.pages).forEach(function (key) {
            config.plugins.delete('html-' + key);
            config.plugins.delete('preload-' + key);
            config.plugins.delete('prefetch-' + key);
        });

    },
    configureWebpack: {
        // 需要开启source-map文件映射，因为服务器端在渲染时，会通过Bundle中的map文件映射关系进行文件的查询
        devtool: 'source-map',
        // 服务器端在Node环境中运行，需要打包为类Node.js环境可用包（使用Node.js require加载chunk）
        // 客户端在浏览器中运行，需要打包为类浏览器环境里可用包
        target: TARGET_NODE ? 'node' : 'web',
        // 关闭对node变量、模块的polyfill
        node: TARGET_NODE ? undefined : false,
        output: {
            // 配置模块的暴露方式，服务器端采用module.exports的方式，客户端采用默认的var变量方式
            libraryTarget: TARGET_NODE ? 'commonjs2' : undefined,
        },
        externals: TARGET_NODE ? nodeExternals({
            allowlist: [/\.css$/]
        }) : undefined,
        optimization: {
            splitChunks: TARGET_NODE ? false : undefined,
        },
        plugins: [
            // 根据之前配置的环境变量判断打包为客户端/服务器端Bundle
            TARGET_NODE ? new VueSSRServerPlugin() : new VueSSRClientPlugin(),
        ],
    },
};

module.exports = vueConfig;