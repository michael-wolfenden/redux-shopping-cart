import expect from 'expect'

import rootReducer from './reducer'

const state = rootReducer(undefined, {})

describe('root', () => {
    describe('reducers', () => {
        it('should include cart reducer', () => {
            expect(state).toIncludeKey('cart')
        })

        it('should include products reducer', () => {
            expect(state).toIncludeKey('products')
        })
    })
})
