import React, { PropTypes } from 'react'
const { string, number } = PropTypes

const Product = ({ price, quantity, title }) =>
    <div> {title} - &#36;{price} {quantity ? `x ${quantity}` : null} </div>

Product.propTypes = {
    price: number,
    quantity: number,
    title: string,
}

export default Product
