import {uniqId} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

// ::TODO:: Clean this up.
actions.create = (props) => ({
  type: ACTION_TYPES.TODOS_CREATE,
  payload: {
    id: uniqId(),
    text: props.text || '',
    timestamp: Date.now(),

    /*
      A todo 'id' that is only used for initial insertion. One
      time use only. Afterwards, this is unreliable. Provide only
      either one of these props, not both. 'insertAfter' will take
      priority if both are provided.
    */
    insertAfter: props.insertAfter,
    insertBefore: props.insertBefore,

    // INPUT_FIELD | TODO_ITEM
    createdBy: props.createdBy,

    // If the todo was created by pressing the ENTER key at caret
    // position 0. If so, do not focus at mount.
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
