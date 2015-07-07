import { createRedux, createDispatcher, composeStores } from 'redux'
import thunkMiddleware from 'redux/lib/middleware/thunk'

import huuidkuReducer from './reducers/huuidkuReducer'
import debug from 'debug'

const log = debug('redux')

function debugMiddleware(next) {
  return action => {
    log('Dispatching: ', action)
    next(action)
  }
}
const store = composeStores({
  huuidku: huuidkuReducer
})
const dispatcher = createDispatcher(
  store,
  getState => [thunkMiddleware(getState), debugMiddleware]
)

export default function(initialState = {}) {
  return createRedux(dispatcher, initialState)
}
