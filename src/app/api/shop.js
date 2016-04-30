/* Mocking client-server processing */
import productJson from 'api/products.json'

const TIMEOUT = 100

function getProducts(cb, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(cb(productJson)), timeout || TIMEOUT)
    })
}

function buyProducts(payload, cb, timeout) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(cb(payload)), timeout || TIMEOUT)
    })
}

export default {
    getProducts,
    buyProducts,
}

