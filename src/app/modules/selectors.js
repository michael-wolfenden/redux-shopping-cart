import { getProductById } from 'modules/products/selectors'
import { getAddedIds, getQuantity } from 'modules/cart/selectors'

const getTotal = state =>
    getAddedIds(state)
        .reduce(
            (total, id) => total + getProductById(state, id).price * getQuantity(state, id),
            0
        ).toFixed(2)

const getCartProducts = state =>
    getAddedIds(state)
        .map(id => Object.assign(
            {},
            getProductById(state, id),
            { quantity: getQuantity(state, id) }
        ))

export {
    getTotal,
    getCartProducts,
}
