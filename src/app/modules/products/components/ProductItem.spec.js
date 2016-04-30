import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'

import ProductItem from './ProductItem'
import Product from './Product'

const render = (productProps) => {
    const actions = {
        onAddToCartClicked: expect.createSpy(),
    }

    const component = mount(
        <ProductItem product={productProps} {...actions} />
    )

    return {
        component,
        actions,
        button: component.find('button'),
        product: component.find(Product),
    }
}

let productProps = {
    title: 'Product 1',
    price: 9.99,
    inventory: 6,
}

describe('products', () => {
    describe('components', () => {
        describe('<ProductItem />', () => {
            describe('when product inventory is > 0', () => {
                it('should render product', () => {
                    const { product } = render(productProps)

                    expect(product.props())
                        .toEqual({ title: 'Product 1', price: 9.99, quantity: 6 })
                })

                it('should render Add To Cart message', () => {
                    const { button } = render(productProps)

                    expect(button.text())
                        .toMatch(/Add to cart/)
                })

                it('should call action on button click', () => {
                    const { button, actions } = render(productProps)
                    button.simulate('click')

                    expect(actions.onAddToCartClicked)
                        .toHaveBeenCalled()
                })
            })

            describe('when product inventory is 0', () => {
                beforeEach(() => {
                    productProps.inventory = 0
                })

                it('should render Sold Out message', () => {
                    const { button } = render(productProps)

                    expect(button.text())
                        .toMatch(/^Sold Out/)
                })

                it('should disable button', () => {
                    const { button } = render(productProps)

                    expect(button.prop('disabled'))
                        .toEqual('disabled')
                })
            })
        })
    })
})
