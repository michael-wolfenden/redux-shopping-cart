import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import keyBy from 'lodash.keyby'

import { RECEIVE_PRODUCTS } from './actions'
import { ADD_TO_CART } from 'modules/cart/actions'

const initialState = {
    visibleIds: [],
    productsKeyedById: {},
}

const visibleIds = handleActions({
    [RECEIVE_PRODUCTS]: (state, { payload: products }) =>
        products.map(product => product.id),
}, initialState.visibleIds)

const productsKeyedById = handleActions({
    [RECEIVE_PRODUCTS]: (state, { payload: product }) => ({
        ...state,
        ...(keyBy(product, prod => prod.id)),
    }),

    [ADD_TO_CART]: (state, { payload: productId }) => ({
        ...state,
        [productId]: {
            ...state[productId],
            inventory: state[productId].inventory - 1,
        },
    }),
}, initialState.productsKeyedById)

export default combineReducers({
    visibleIds,
    productsKeyedById,
})
