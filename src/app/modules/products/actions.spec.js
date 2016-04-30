import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import expect from 'expect'

import productJson from 'api/products.json'
import { getAllProductsAsync, receiveProducts } from './actions'

const mockStore = configureMockStore([thunk])

describe('products', () => {
    describe('thunks', () => {
        it('getAllProductsAsync', () => {
            const store = mockStore()

            const expectedActions = [
                receiveProducts(productJson),
            ]

            return store
                .dispatch(getAllProductsAsync())
                .then(() =>
                    expect(store.getActions()).toEqual(expectedActions)
                )
        })
    })
})
