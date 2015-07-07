import { createRedux, createDispatcher, composeStores } from 'redux'
import thunkMiddleware from 'redux/lib/middleware/thunk'
import promiseMiddleware from 'redux-promise'

import huuidkuReducer from './reducers/huuidkuReducer'
import debug from 'debug'

const log = debug('redux')

function debugMiddleware(next) {
  return action => {
    log('Dispatching: ', action)
    return next(action)
  }
}
const store = composeStores({
  huuidkus: huuidkuReducer
})
const dispatcher = createDispatcher(
  store,
  getState => [thunkMiddleware(getState), promiseMiddleware, debugMiddleware]
)

export default function(initialState = {}) {
  return createRedux(dispatcher, initialState)
}
