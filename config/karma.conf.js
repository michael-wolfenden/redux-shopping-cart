const webpackDevConfig = require('./webpack.config.development.js')

// to debug open http://127.0.0.1:9876/debug.html and check console
module.exports = config => config.set({
    // run browserless
    browsers: ['PhantomJS'],

    // use the mocha test framework
    frameworks: ['mocha'],

    // just load this file
    files: [
        'test.specs.js',
    ],

    // preprocess with webpack
    preprocessors: {
        'test.specs.js': ['webpack'],
    },

    // report results in this format
    reporters: ['mocha'],

    webpack: {
        devtool: 'inline-source-map',
        resolve: webpackDevConfig.resolve,
        module: webpackDevConfig.module,
        // the following is needed for enzyme
        // (ref: https://github.com/airbnb/enzyme/blob/master/docs/guides/karma.md)
        externals: {
            cheerio: 'window',
            'react/addons': true,
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true,
        },
    },
})
