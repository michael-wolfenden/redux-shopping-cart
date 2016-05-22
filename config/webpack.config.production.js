const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const AddManifestToIndexTemplatePlugin = require('./add-manifest-to-index-template-webpack-plugin')

const PATHS = require('./paths')
const pkg = require('../package.json')

const webpackConfig = {

    entry: {
        app: PATHS.entryFile,
        // create a seperate vendor bundle with all our package.json dependencies, excluding
        // babel-runtime as the transform-runtime babel will add the required es2015 shims
        // to the app bundle
        vendor: Object.keys(pkg.dependencies)
                      .filter(dependency => dependency !== 'babel-runtime'),
    },

    output: {
        path: PATHS.distDir,
        filename: 'assets/js/[name].[chunkhash].js',
        chunkFilename: '[chunkhash].js',
    },

    devtool: 'source-map',

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
                test: /\.js?$/,
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
                test: /\.js?$/,
                include: PATHS.appDir,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                    presets: [
                        'react',
                        'es2015',
                        // (ref: https://babeljs.io/docs/plugins/preset-stage-0/)
                        'stage-0',
                        // (ref: https://github.com/thejameskyle/babel-react-optimize)
                        'react-optimize',
                    ],
                    plugins: [
                        // (ref: https://babeljs.io/docs/plugins/transform-runtime/)
                        'transform-runtime',
                    ],
                },
            },
        ],
    },

    // fail build if any eslint errors or warnings
    eslint: {
        failOnWarning: true,
        failOnError: true,
    },

    plugins: [

        // set NODE_ENV variable to production. Used by some libraries such
        // as react to perform extra optimizations
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),

        // remove dist directory
        new CleanWebpackPlugin(PATHS.distDir, {
            root: PATHS.rootDir,
        }),

        // use filename instead of webpack generated id's for imports
        // this aids with long term caching
        // (ref: https://github.com/webpack/webpack/issues/1315)
        new webpack.NamedModulesPlugin(),

        // Search for equal or similar files and deduplicate them in the output.
        // (ref: https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin)
        new webpack.optimize.DedupePlugin(),

        // generate 3 bundles
        // * app (from main entry file)
        // * vendor (from project.json package dependencies)
        // * manifest (entry chunk that includes the webpack runtime and chunkhash mappings)
        //   this will be injected in the main index.html page
        // (ref: https://github.com/webpack/webpack/tree/master/examples/chunkhash)
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
        }),

        // minify js and css bundles
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),

        // inject references to the generated bundles (both js and css) into
        // the index html template, minify and copy to dist folder
        new HtmlWebpackPlugin({
            excludeChunks: ['manifest'],
            template: PATHS.index,
            minify: {
                removeComments: false,
                collapseWhitespace: true,
            },
        }),

        // inject manifest bundle from above into the index html template
        // prevents changes in app bundle changing the hash of the vendor
        // bundle and vice versa.
        // (ref: https://github.com/webpack/webpack/issues/1315)
        new AddManifestToIndexTemplatePlugin(),

        // copy /public => /dist
        new CopyWebpackPlugin([{
            from: PATHS.publicDir,
            to: PATHS.distDir,
        }]),
    ],
}

module.exports = webpackConfig
