import { createRedux } from 'redux'
import likeStore from './stores/likeStore'

export default function() {
  return createRedux({ likes: likeStore })
}
