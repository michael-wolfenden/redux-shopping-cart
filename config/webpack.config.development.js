const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = require('./paths')

const webpackConfig = {

    entry: [
        PATHS.entryFile,
    ],

    output: {
        filename: 'bundle.js',
    },

    devtool: 'eval',

    devServer: {
        // only display errors
        stats: 'errors-only',
    },

    resolve: {
        // set root resolver to app directory.
        // this allows using absolute paths for imports starting from
        // the app folder instead of relative paths
        // ie import { } from dir/dir/dir vs
        // ie import { } from ../../../
        root: PATHS.appDir,
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                include: PATHS.appDir,
                loader: 'eslint',
            },
        ],

        loaders: [
            {
                test: /\.json$/,
                include: PATHS.appDir,
                loader: 'json',
            },
            {
                test: /\.js$/,
                include: PATHS.appDir,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: [
                        'react',
                        'es2015',
                        // (ref: https://babeljs.io/docs/plugins/preset-stage-0/)
                        'stage-0',
                    ],
                    plugins: [
                        // (ref: https://babeljs.io/docs/plugins/transform-runtime/)
                        'transform-runtime',
                    ],
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.index,
            inject: true,
        }),

        new OpenBrowserPlugin({
            url: 'http://localhost:8080',
        }),
    ],
}

module.exports = webpackConfig
