import expect from 'expect'

import cart from './reducer'
import { addToCart, checkoutRequest, checkoutFailure } from './actions'

describe('cart', () => {
    describe('reducers', () => {
        const initialState = {
            addedIds: [],
            quantityById: {},
        }

        it('initial state should be provided', () => {
            const expected = initialState
            const actual = cart(undefined, {})

            expect(expected).toEqual(actual)
        })

        it('checkoutRequest should clear cart', () => {
            const expected = initialState
            const actual = cart({}, checkoutRequest())

            expect(expected).toEqual(actual)
        })

        it('checkoutFailure should return original state', () => {
            const originalState = {
                addedIds: [1, 2],
                quantityById: { 1: 1, 2: 1 },
            }

            const expected = originalState
            const actual = cart(originalState, checkoutFailure())

            expect(expected).toEqual(actual)
        })

        describe('addToCart', () => {
            it('when product is not in cart should add to cart', () => {
                const expected = {
                    addedIds: [1],
                    quantityById: { 1: 1 },
                }

                const actual = cart(initialState, addToCart(1))

                expect(expected).toEqual(actual)
            })

            it('when product is already in cart should increment existing quantity', () => {
                const state = {
                    addedIds: [1, 2],
                    quantityById: { 1: 1, 2: 1 },
                }

                const expected = {
                    addedIds: [1, 2],
                    quantityById: { 1: 1, 2: 2 },
                }

                const actual = cart(state, addToCart(2))

                expect(expected).toEqual(actual)
            })
        })
    })
})

