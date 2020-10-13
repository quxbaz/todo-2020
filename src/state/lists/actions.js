import {uniqId} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

actions.create = ({title}) => ({
  type: ACTION_TYPES.LISTS__CREATE,
  payload: {
    id: uniqId(),
    title,
  },
})

actions.createNote = (id, props, pos) => ({
  type: ACTION_TYPES.LISTS__CREATE_NOTE,
  payload: {
    id,
    props: {
      id: uniqId(),
      ...props,
    },
    pos,
  },
})

actions.destroyNote = (id, note) => ({
  type: ACTION_TYPES.LISTS__DESTROY_NOTE,
  payload: {id, note},
})

export default actions
