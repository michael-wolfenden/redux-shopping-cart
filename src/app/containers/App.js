/* eslint-disable global-require */
import React from 'react'

import ProductsContainer from 'modules/products/containers/ProductsContainer'
import CartContainer from 'modules/cart/containers/CartContainer'

function devTools() {
    if (process.env.NODE_ENV !== 'production') {
        const DevTools = require('containers/DevTools').default
        return <DevTools />
    }

    return null
}

export default function App() {
    return (
        <div>
            <ProductsContainer />
            <hr />
            <CartContainer />
            {devTools()}
        </div>
    )
}

