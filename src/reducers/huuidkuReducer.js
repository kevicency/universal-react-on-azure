import { handleActions } from 'redux-actions'

export default handleActions({
  GET_RANDOM: (state, action) => Object.assign({}, state, {
    random: action.payload
  }),
  GET_BY_UUID: (state, action) => Object.assign({}, state, {
    [action.payload.uuid]: action.payload
  })
}, {})
