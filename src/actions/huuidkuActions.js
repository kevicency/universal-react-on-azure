import { createAction } from 'redux-actions'
import Uuid from 'node-uuid'
import { encode } from '../huuidku'

export const getByUuid = createAction('GET_BY_UUID', (uuid) => ({
  uuid,
  haiku: encode(uuid)
}))

export const getRandom = createAction('GET_RANDOM', () => getByUuid(Uuid.v1()).payload)
