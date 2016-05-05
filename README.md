# redux-shopping-cart

My take on the [shopping cart example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart) from the redux source

[![Build Status][build-badge]][build]

## Getting started

This will install all npm packages and then run a live reload server at http://localhost:8080/index.html

    > npm start

## Testing

Runs Karma and watches for changes to re-run tests. To add a unit test, simply create a `.spec.js` file anywhere in `~/src`. Karma will pick up on these files automatically. Mocha will be available within your test without the need to import it.

    > npm test

## Production build

Runs linter, tests, and then on success, compiles your application to `~/dist`

    > npm run production

## Libraries

### Testing

+ [karma](https://github.com/karma-runner/karma) - Test Runner for JavaScript
+ [enzyme](https://github.com/airbnb/enzyme) - JavaScript Testing utilities for React
+ [expect](https://github.com/mjackson/expect) - Write better assertions
* [phantomjs](https://github.com/Medium/phantomjs) - Headless website testing

### React / Redux

+ [redux-actions](https://github.com/acdlite/redux-actions) - Flux Standard Action utilities for Redux.
+ [redux-thunk](https://github.com/gaearon/redux-thunk) - Thunk middleware for Redux
+ [redux-devtools](https://github.com/gaearon/redux-devtools) - DevTools for Redux with hot reloading, action replay, and customizable UI
* [redux-logger](https://github.com/theaqua/redux-logger) - Logger middleware for redux
* [babel-react-optimize](https://github.com/thejameskyle/babel-react-optimize) - A Babel preset and plugins for optimizing React code.

### Other

+ [webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends
+ [babel-plugin-transform-runtime](https://babeljs.io/docs/plugins/transform-runtime/) - ES2015 pollyfils

[build-badge]: https://travis-ci.org/michael-wolfenden/redux-shopping-cart.svg?style=flat-square
[build]: https://travis-ci.org/michael-wolfenden/redux-shopping-cart
