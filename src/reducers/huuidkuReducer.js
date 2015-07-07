import { handleActions } from 'redux-actions'

export default handleActions({
  GET_RANDOM: (state, action) => action.payload,
  GET_FROM_UUID: (state, action) => action.payload
})
