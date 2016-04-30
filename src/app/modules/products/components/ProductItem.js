import React, { Component, PropTypes } from 'react'
const { shape, string, number, func } = PropTypes

import Product from './Product'

class ProductItem extends Component {
    static propTypes = {
        product: shape({
            title: string.isRequired,
            price: number.isRequired,
            inventory: number.isRequired,
        }).isRequired,
        onAddToCartClicked: func.isRequired,
    }

    onButtonClick = () => this.props.onAddToCartClicked(this.props.product.id);

    render() {
        const { product } = this.props

        return (
            <div style={{ marginBottom: 20 }}>
                <Product
                    title={product.title}
                    price={product.price}
                    quantity={product.inventory}
                />
                <button
                    onClick={this.onButtonClick}
                    disabled={product.inventory > 0 ? '' : 'disabled'}
                >
                    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </div>
        )
    }
}

export default ProductItem

