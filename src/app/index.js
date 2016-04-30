import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from 'containers/App'
import configureStore from 'modules/configureStore'
import { getAllProductsAsync } from 'modules/products/actions'

const store = configureStore()
store.dispatch(getAllProductsAsync())

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
