import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'

import {
    addToCart,
    addToCartAsync,
    checkoutRequest,
    checkoutSuccess,
    checkoutAsync,
} from './actions'

const mockStore = configureMockStore([thunk])

describe('cart', () => {
    describe('thunks', () => {
        it('checkoutAsync should dispatch checkoutRequest and checkoutSuccess ', () => {
            const cart = {
                addedIds: [1],
                quantityById: { 1: 1 },
            }
            const store = mockStore({ cart })

            const expected = [
                checkoutRequest(),
                checkoutSuccess(cart),
            ]

            return store
                .dispatch(checkoutAsync({}))
                .then(() => {
                    const actual = store.getActions()
                    expect(expected).toEqual(actual)
                })
        })

        describe('addToCartAsync', () => {
            it('when the product has inventory left should dispatch addToCart', () => {
                const store = mockStore({
                    products: {
                        productsKeyedById: {
                            1: { inventory: 1 },
                        },
                    },
                })

                const expected = [
                    addToCart(1),
                ]

                store.dispatch(addToCartAsync(1))
                const actual = store.getActions()

                expect(expected).toEqual(actual)
            })

            it('when the product has NO inventory left should not dispatch any actions', () => {
                const store = mockStore({
                    products: {
                        productsKeyedById: {
                            1: { inventory: 0 },
                        },
                    },
                })

                const expected = []

                store.dispatch(addToCartAsync(1))
                const actual = store.getActions()

                expect(expected).toEqual(actual)
            })
        })
    })
})
