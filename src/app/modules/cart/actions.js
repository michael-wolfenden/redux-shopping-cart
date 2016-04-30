import { createAction } from 'redux-actions'

import shop from 'api/shop'
import { NAME } from './constants'
import { getCartState } from './selectors'
import { getProductById } from 'modules/products/selectors'

const ADD_TO_CART = `${NAME}/ADD_TO_CART`
const addToCart = createAction(ADD_TO_CART)

const CHECKOUT_REQUEST = `${NAME}/CHECKOUT_REQUEST`
const checkoutRequest = createAction(CHECKOUT_REQUEST)

const CHECKOUT_SUCCESS = `${NAME}/CHECKOUT_SUCCESS`
const checkoutSuccess = createAction(CHECKOUT_SUCCESS)

const CHECKOUT_FAILURE = `${NAME}/CHECKOUT_FAILURE`
const checkoutFailure = createAction(CHECKOUT_FAILURE)

const addToCartAsync = (productId) => (dispatch, getState) => {
    if (getProductById(getState(), productId).inventory > 0) {
        dispatch(addToCart(productId))
    }
}

const checkoutAsync = (products) => (dispatch, getState) => {
    const cart = getCartState(getState())
    dispatch(checkoutRequest())
    return shop.buyProducts(products, () => {
        dispatch(checkoutSuccess(cart))
    })
}

export {
    ADD_TO_CART,
    addToCart,
    CHECKOUT_SUCCESS,
    checkoutSuccess,
    CHECKOUT_REQUEST,
    checkoutRequest,
    CHECKOUT_FAILURE,
    checkoutFailure,
    addToCartAsync,
    checkoutAsync,
}

