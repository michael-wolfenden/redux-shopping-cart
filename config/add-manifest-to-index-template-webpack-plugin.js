'use strict'

const sourceMappingURL = require('source-map-url')

const addManifestChunckContentsToHtmlWebpackPluginOptions = (compilation, htmlWebpackPluginOptions) => {
    const manifestAssets = compilation.getStats().toJson().assetsByChunkName.manifest

    manifestAssets
        .forEach(manifestAsset => {
            const isManifestSourceMap = manifestAsset.includes('.map')

            if (!isManifestSourceMap) {
                // manifestSource will include the //# sourceMappingURL line
                // if including sourcemaps so we need to remove
                const manifestSource = compilation.assets[manifestAsset].source()
                const manifestSourceWithoutSourceMapUrl = sourceMappingURL.removeFrom(manifestSource)

                htmlWebpackPluginOptions.webpackManifest = `<script>${manifestSourceWithoutSourceMapUrl}</script>`
            }

            // delete from assets so the manifest files (js & .map) are not written to disk
            delete compilation.assets[manifestAsset]
        })
}

class Plugin {
    apply(compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('html-webpack-plugin-before-html-generation', (object, callback) => {
                addManifestChunckContentsToHtmlWebpackPluginOptions(compilation, object.plugin.options)

                callback()
            })
        })
    }
}

module.exports = Plugin
