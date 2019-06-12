import { createStore , applyMiddleware } from 'redux'

import { createLogger } from 'redux-log'

import promise from 'redux-promise'

import reducer from './reducer/index'

import asyncAction from './asyncAction'

let middlewares = [
    promise,
    asyncAction
]

!process.env.NODE_ENV || process.env.NODE_ENV === 'development' ? middlewares.push(createLogger()) : ''

export default createStore(
    reducer,
    applyMiddleware(...middlewares)
)
