import { createAction } from 'redux-actions'

import { NAME } from './constants'
import shop from 'api/shop'

const RECEIVE_PRODUCTS = `${NAME}/RECEIVE_PRODUCTS`
const receiveProducts = createAction(RECEIVE_PRODUCTS)

const getAllProductsAsync = () => (dispatch) =>
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })

export {
    RECEIVE_PRODUCTS,
    receiveProducts,
    getAllProductsAsync,
}
