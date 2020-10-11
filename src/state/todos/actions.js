import {uniqId} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

// ::TODO:: Clean this up.
actions.create = (props) => ({
  type: ACTION_TYPES.TODOS_CREATE,
  payload: {
    id: uniqId(),
    text: props.text || '',

    // ::TODO:: Remove.
    timestamp: Date.now(),

    // ::TODO:: Remove these hacks.
    insertAfter: props.insertAfter,
    insertBefore: props.insertBefore,
    createdBy: props.createdBy,
    wasCreatedAtStartPos: props.wasCreatedAtStartPos || false,
  }
})

actions.remove = (id) => ({
  type: ACTION_TYPES.TODOS_REMOVE,
  payload: {id},
})

actions.update = (id, props) => ({
  type: ACTION_TYPES.TODOS_UPDATE,
  payload: {id, props},
})

// Merges a todo with the one previos to it.
actions.merge = (id) => ({
  type: ACTION_TYPES.TODOS_MERGE,
  payload: {id},
})

export default actions
