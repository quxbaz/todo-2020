import {uniqId} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

actions.create = (props) => ({
  type: ACTION_TYPES.NOTES__CREATE,
  payload: {
    id: uniqId(),
    text: props.text || '',

    // ::TODO:: Remove these hacks. They belong in UI event fields,
    // not in app state.
    createdBy: props.createdBy,
    wasCreatedAtStartPos: props.wasCreatedAtStartPos || false,

  }
})

actions.remove = (id) => ({
  type: ACTION_TYPES.NOTES__REMOVE,
  payload: {id},
})

actions.update = (id, props) => ({
  type: ACTION_TYPES.NOTES__UPDATE,
  payload: {id, props},
})

export default actions
