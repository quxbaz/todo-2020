import {uniqId} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

actions.update = (id, props) => ({
  type: ACTION_TYPES.NOTES__UPDATE,
  payload: {id, props},
})

actions.appendText = (id, text) => ({
  type: ACTION_TYPES.NOTES__APPEND_TEXT,
  payload: {id, text},
})

export default actions
