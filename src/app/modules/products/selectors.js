import { NAME } from './constants'

const getProductsState = state => state[NAME]

const getProductById = (state, id) =>
    getProductsState(state)
        .productsKeyedById[id]

const getVisibleProducts = state =>
    getProductsState(state)
        .visibleIds
        .map(id => getProductById(state, id))

export {
    getProductById,
    getVisibleProducts,
}

