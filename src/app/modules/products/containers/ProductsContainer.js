import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
const { number, string, func, arrayOf, shape } = PropTypes

import { getVisibleProducts } from 'modules/products/selectors'
import ProductItem from 'modules/products/components/ProductItem'
import ProductsList from 'modules/products/components/ProductsList'
import { addToCartAsync } from 'modules/cart/actions'

export class ProductsContainer extends Component {
    static propTypes = {
        products: arrayOf(shape({
            id: number.isRequired,
            title: string.isRequired,
            price: number.isRequired,
            inventory: number.isRequired,
        })).isRequired,
        addToCartAsync: func.isRequired,
    }

    renderProducts(products) {
        return products.map(product => this.renderProduct(product))
    }

    renderProduct(product) {
        return (
            <ProductItem
                key={product.id}
                product={product}
                onAddToCartClicked={this.props.addToCartAsync}
            />
        )
    }

    render() {
        const { products } = this.props

        return (
            <ProductsList title="Products">
                {this.renderProducts(products)}
            </ProductsList>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: getVisibleProducts(state),
    }
}

function mapDispatchToProps() {
    return {
        addToCartAsync,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps(),
)(ProductsContainer)
