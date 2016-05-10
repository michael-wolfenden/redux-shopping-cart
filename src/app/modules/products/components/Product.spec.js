import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'

import Product from './Product'

const render = (props) => mount(
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
