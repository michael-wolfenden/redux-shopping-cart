// because we are using loaders while producing our bundle we need to create a webpack context file
// https://github.com/webpack/docs/wiki/context containing all our specs
const context = require.context('../src', true, /spec\.js?$/)
context.keys().forEach(context)
