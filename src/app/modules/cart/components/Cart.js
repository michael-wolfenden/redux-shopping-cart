import React, { PropTypes } from 'react'
const { string, func, array } = PropTypes

import Product from 'modules/products/components/Product'

const Cart = ({ products, total, onCheckoutClicked }) => {
    const hasProducts = products.length > 0
    const nodes = !hasProducts ?
        <em>Please add some products to cart.</em> :
        products.map(product =>
            <Product
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            />
        )

    return (
        <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <p>Total: &#36;{total}</p>
            <button
                onClick={onCheckoutClicked}
                disabled={hasProducts ? '' : 'disabled'}
            >
                Checkout
            </button>
        </div>
    )
}

Cart.propTypes = {
    products: array,
    total: string,
    onCheckoutClicked: func,
}

export default Cart
