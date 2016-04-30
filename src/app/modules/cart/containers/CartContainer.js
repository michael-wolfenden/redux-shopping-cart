import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
const { number, string, func, arrayOf, shape } = PropTypes

import { getCartProducts, getTotal } from 'modules/selectors'
import { checkoutAsync } from 'modules/cart/actions'
import Cart from 'modules/cart/components/Cart'

export class CartContainer extends Component {
    static propTypes = {
        products: arrayOf(shape({
            id: number.isRequired,
            title: string.isRequired,
            price: number.isRequired,
            quantity: number.isRequired,
        })).isRequired,
        total: string,
        checkoutAsync: func.isRequired,
    }

    onCartCheckoutClicked = () => {
        this.props.checkoutAsync()
    }

    render() {
        const { products, total } = this.props

        return (
            <Cart
                products={products}
                total={total}
                onCheckoutClicked={this.onCartCheckoutClicked}
            />
        )
    }
}

function mapStateToProps(state) {
    return {
        products: getCartProducts(state),
        total: getTotal(state),
    }
}

function mapDispatchToProps() {
    return {
        checkoutAsync,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps(),
)(CartContainer)
