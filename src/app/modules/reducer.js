import { combineReducers } from 'redux'

import products from 'modules/products'
import cart from 'modules/cart'

export default combineReducers({
    [products.NAME]: products.reducer,
    [cart.NAME]: cart.reducer,
})
