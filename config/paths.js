const path = require('path')

const rootDir = path.join(__dirname, '../')
const srcDir = path.join(rootDir, 'src')
const distDir = path.join(rootDir, 'dist')
const appDir = path.join(srcDir, 'app')
const publicDir = path.join(srcDir, 'public')
const entryFile = path.join(appDir, 'index.js')
const index = path.join(srcDir, 'index.html')

const paths = {
    rootDir,
    entryFile,
    distDir,
    appDir,
    publicDir,
    index,
}

module.exports = paths
