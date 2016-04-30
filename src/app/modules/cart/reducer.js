import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import { ADD_TO_CART, CHECKOUT_SUCCESS, CHECKOUT_FAILURE } from './actions'

const initialState = {
    addedIds: [],
    quantityById: {},
}

const addedIds = handleActions({
    [ADD_TO_CART]: (state, { payload: productId }) => {
        if (state.indexOf(productId) !== -1) {
            return state
        }
        return [...state, productId]
    },

    [CHECKOUT_SUCCESS]: () => initialState.addedIds,

    [CHECKOUT_FAILURE]: (state) => state,

}, initialState.addedIds)

const quantityById = handleActions({
    [ADD_TO_CART]: (state, { payload: productId }) => ({
        ...state,
        [productId]: (state[productId] || 0) + 1,
    }),

    [CHECKOUT_SUCCESS]: () => initialState.quantityById,

    [CHECKOUT_FAILURE]: (state) => state,

}, initialState.quantityById)

export default combineReducers({
    addedIds,
    quantityById,
})
