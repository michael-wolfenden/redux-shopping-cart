import React, { PropTypes } from 'react'
const { node, string } = PropTypes

const ProductsList = ({ title, children }) => (
    <div>
        <h3>{title}</h3>
        <div>{children}</div>
    </div>
)

ProductsList.propTypes = {
    children: node,
    title: string.isRequired,
}

export default ProductsList
