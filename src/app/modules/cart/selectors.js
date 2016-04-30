import { NAME } from './constants'

const getCartState = state => state[NAME]

const getAddedIds = (state) =>
    getCartState(state).addedIds

const getQuantity = (state, productId) =>
    getCartState(state).quantityById[productId] || 0

export {
    getCartState,
    getAddedIds,
    getQuantity,
}

