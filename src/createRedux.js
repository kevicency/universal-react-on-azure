import { createRedux, createDispatcher, composeStores } from 'redux'
import thunkMiddleware from 'redux/lib/middleware/thunk'
import likeStore from './stores/likeStore'
import debug from 'debug'

const log = debug('redux')

function debugMiddleware(next) {
  return action => {
    log('Dispatching: ', action)
    next(action)
  }
}
const store = composeStores({likes: likeStore})
const dispatcher = createDispatcher(
  store,
  getState => [thunkMiddleware(getState), debugMiddleware]
)

export default function(initialState = {}) {
  return createRedux(dispatcher, initialState)
}
