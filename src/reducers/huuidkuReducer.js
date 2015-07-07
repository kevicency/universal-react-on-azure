import { handleActions } from 'redux-actions'

export default handleActions({
  GET_RANDOM: (state, action) => Object.assign({}, state, {
    random: action.payload
  }),
  GET_RANDOM_ASYNC: {
    next: (state, action) => Object.assign({}, state, {
      randomAsync: action.payload
    }),
    'throw': (state, action) => Object.assign({}, state, {
      randomAsync: {
        hasError: true,
        error: action.payload.message
      }
    })
  },
  GET_RANDOM_ASYNC_BEGIN: (state) => Object.assign({}, state, {
    randomAsync: {
      isLoading: true
    }
  }),
  GET_BY_UUID: (state, action) => Object.assign({}, state, {
    [action.payload.uuid]: action.payload
  })
}, {})
