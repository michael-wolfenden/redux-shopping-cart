import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'

import ProductsList from './ProductsList'

const render = (props) => {
    const component = shallow(
        <ProductsList {...props} />
    )

    return {
        component,
        h3: component.find('h3'),
        children: component.children().at(1),
    }
}

describe('products', () => {
    describe('components', () => {
        describe('<ProductsList />', () => {
            it('should render title', () => {
                const { h3 } = render({ title: 'some title' })

                expect(h3.text())
                    .toMatch(/some title/)
            })

            it('should render children', () => {
                const { children } = render({ title: 'some title', children: 'some child' })

                expect(children.text())
                    .toMatch(/some child/)
            })
        })
    })
})
