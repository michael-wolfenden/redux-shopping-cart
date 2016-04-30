import React from 'react'
import expect from 'expect'
import { mount } from 'enzyme'

import Cart from './Cart'
import Product from 'modules/products/components/Product'

const render = (total, products = []) => {
    const actions = {
        onCheckoutClicked: expect.createSpy(),
    }

    const component = mount(
        <Cart total={total} products={products} {...actions} />
    )

    return {
        component,
        actions,
        p: component.find('p'),
        em: component.find('em'),
        button: component.find('button'),
        products: component.find(Product),
    }
}

describe('cart', () => {
    describe('components', () => {
        describe('<Cart />', () => {
            describe('when no products', () => {
                it('should display total', () => {
                    const { p } = render('9.99')

                    expect(p.text())
                        .toMatch(/Total: \$9.99/)
                })

                it('should display add some products message', () => {
                    const { em } = render()

                    expect(em.text())
                        .toMatch(/^Please add some products to cart/)
                })

                it('should disable button', () => {
                    const { button } = render()

                    expect(button.prop('disabled'))
                        .toEqual('disabled')
                })
            })

            describe('when given product', () => {
                const product = [{
                    id: 1,
                    title: 'Product 1',
                    price: 9.99,
                    quantity: 1,
                }]

                it('should render products', () => {
                    const { products } = render('9.99', product)

                    const props = {
                        title: product[0].title,
                        price: product[0].price,
                        quantity: product[0].quantity,
                        key: product[0].id,
                    }

                    expect(products.at(0).props())
                        .toEqual(props)
                })

                it('should not disable button', () => {
                    const { button } = render('9.99', product)

                    expect(button.prop('disabled'))
                        .toEqual('')
                })

                it('should call action on button click', () => {
                    const { button, actions } = render('9.99', product)

                    button.simulate('click')

                    expect(actions.onCheckoutClicked)
                        .toHaveBeenCalled()
                })
            })
        })
    })
})
