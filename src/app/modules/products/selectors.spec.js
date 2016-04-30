import expect from 'expect'

import { getProductById, getVisibleProducts } from './selectors'

const products = {
    visibleIds: [1, 2, 3],
    productsKeyedById: {
        1: { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
        2: { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
        3: { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
    },
}

const state = { products }

describe('products', () => {
    describe('selectors', () => {
        it('getProductById should return the product with the specified id', () => {
            const expected = { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 }
            const actual = getProductById(state, 2)

            expect(expected).toEqual(actual)
        })

        it('getVisibleProducts should return all products', () => {
            const expected = [
                { id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2 },
                { id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10 },
                { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5 },
            ]

            const actual = getVisibleProducts(state)

            expect(expected).toEqual(actual)
        })
    })
})

