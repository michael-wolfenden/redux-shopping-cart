import expect from 'expect'

import { getTotal, getCartProducts } from './selectors'

const state = {
    cart: {
        addedIds: [1, 2, 3],
        quantityById: {
            1: 4,
            2: 2,
            3: 1,
        },
    },
    products: {
        productsKeyedById: {
            1: {
                id: 1,
                price: 1.99,
            },
            2: {
                id: 1,
                price: 4.99,
            },
            3: {
                id: 1,
                price: 9.99,
            },
        },
    },
}

describe('root', () => {
    describe('selectors', () => {
        it('getTotal should return the total cost of all products in the cart', () => {
            const expected = 27.93
            const actual = getTotal(state)

            expect(expected).toEqual(actual)
        })

        it('getTotal should return all products in the the cart with their quantities', () => {
            const expected = [
                {
                    id: 1,
                    price: 1.99,
                    quantity: 4,
                },
                {
                    id: 1,
                    price: 4.99,
                    quantity: 2,
                },
                {
                    id: 1,
                    price: 9.99,
                    quantity: 1,
                },
            ]

            const actual = getCartProducts(state)

            expect(expected).toEqual(actual)
        })
    })
})

