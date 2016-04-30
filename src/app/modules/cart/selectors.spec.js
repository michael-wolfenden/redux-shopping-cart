import expect from 'expect'

import { getCartState, getAddedIds, getQuantity } from './selectors'

const cart = {
    addedIds: [1, 2],
    quantityById: { 1: 3, 2: 5 },
}

const state = { cart }

describe('cart', () => {
    describe('selectors', () => {
        it('getCartState should return the cart state', () => {
            const expected = cart
            const actual = getCartState(state)

            expect(expected).toEqual(actual)
        })

        it('getAddedIds should return the ids of all products in the cart', () => {
            const expected = cart.addedIds
            const actual = getAddedIds(state)

            expect(expected).toEqual(actual)
        })

        it('getQuantity should return the quantity of the specified product in the cart', () => {
            const expected = 5
            const actual = getQuantity(state, 2)

            expect(expected).toEqual(actual)
        })
    })
})

