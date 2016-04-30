import expect from 'expect'

import products from './reducer'
import { receiveProducts } from './actions'

describe('products', () => {
    describe('reducers', () => {
        const initialState = {
            visibleIds: [],
            productsKeyedById: {},
        }

        it('initial state should be provided', () => {
            const expected = initialState
            const actual = products(undefined, {})

            expect(expected).toEqual(actual)
        })

        it('receiveProducts should initialise the products state', () => {
            const receivedProducts = [
                { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
                { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
                { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
            ]

            const expected = {
                visibleIds: [1, 2, 3],
                productsKeyedById: {
                    1: { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
                    2: { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
                    3: { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
                },
            }

            const actual = products({}, receiveProducts(receivedProducts))

            expect(expected).toEqual(actual)
        })
    })
})
