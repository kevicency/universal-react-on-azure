import { createAction } from 'redux-actions'
import Uuid from 'node-uuid'
import { encode, encodeAsync } from '../util/huuidkuEncoder'

export const getByUuid = createAction('GET_BY_UUID', (uuid) => ({
  uuid,
  haiku: encode(uuid)
}))

export const getRandom = createAction('GET_RANDOM', () => getByUuid(Uuid.v4()).payload)

export const getRandomAsync = () => {
  return (dispatch) => {
    dispatch(createAction('GET_RANDOM_ASYNC_BEGIN')())
    return dispatch(createAction('GET_RANDOM_ASYNC', async () => {
      const uuid = Uuid.v4()
      const haiku = await encodeAsync(uuid)

      return { uuid, haiku }
    })())
  }
}
