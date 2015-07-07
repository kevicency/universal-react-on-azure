import { createAction } from 'redux-actions'
import Uuid from 'node-uuid'
import { encode } from '../huuidku'

export const getFromUuid = createAction('GET_FROM_UUID', (uuid) => ({
  uuid,
  haiku: encode(uuid)
}))

export const getRandom = createAction('GET_RANDOM', () => getFromUuid(Uuid.v1()).payload)
