import {
  FETCH_LIKES,
  ADD_LIKE
} from '../constants'

export function fetchLikes() {
  return dispatch => {
    dispatch({
      type: FETCH_LIKES
    })
  }
}

export function addLike() {
  return {
    type: ADD_LIKE
  }
}
