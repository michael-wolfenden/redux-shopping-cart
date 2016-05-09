/* eslint-disable global-require */
import React from 'react'

import ProductsContainer from 'modules/products/containers/ProductsContainer'
import CartContainer from 'modules/cart/containers/CartContainer'

const devTools = () => {
    if (process.env.NODE_ENV !== 'production') {
        const DevTools = require('containers/DevTools').default
        return <DevTools />
    }

    return null
}

const App = () =>
    <div>
        <ProductsContainer />
        <hr />
        <CartContainer />
        {devTools()}
    </div>

export default App
