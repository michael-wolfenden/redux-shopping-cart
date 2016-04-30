/* eslint-disable global-require */
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducer'

const initialRootState = {}

const configureStore = (initialState = initialRootState) => {
    let storeEnhancers = []

    if (process.env.NODE_ENV !== 'production') {
        const createLogger = require('redux-logger')
        const DevTools = require('containers/DevTools').default

        storeEnhancers = [
            applyMiddleware(thunk, createLogger()),
            DevTools.instrument(),
        ]
    } else {
        storeEnhancers = [
            applyMiddleware(thunk),
        ]
    }

    return createStore(
        rootReducer,
        initialState,
        compose(...storeEnhancers)
    )
}

export default configureStore
