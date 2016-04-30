import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import Product from './Product'

// should be using mount not shallow, but shallow not working on
// stateless functional components
// (ref: https://github.com/airbnb/enzyme/issues/356)
const render = (props) => shallow(
    <Product {...props} />
)

describe('products', () => {
    describe('components', () => {
        describe('<Product />', () => {
            it('should render title and price', () => {
                const component = render({
                    title: 'Test Product',
                    price: 9.99,
                })

                expect(component.text())
                    .toMatch(/Test Product - \$9.99/)
            })

            it('should render title and price and quantity', () => {
                const component = render({
                    title: 'Test Product',
                    price: 9.99,
                    quantity: 6,
                })

                expect(component.text())
                    .toMatch(/Test Product - \$9.99 x 6/)
            })
        })
    })
})
