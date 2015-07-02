import {
  ADD_LIKE
} from '../constants'

const initialState = {
  count: 0
}

export default function likes(state = initialState, action) {
  switch (action.type) {
    case ADD_LIKE:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default:
      return state
  }
}
