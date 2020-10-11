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

actions.addNote = (id, note) => ({
  type: ACTION_TYPES.LISTS__ADD_NOTE,
  payload: {
    id,
    note,
  },
})

export default actions
