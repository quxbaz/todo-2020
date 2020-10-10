import {omit, uniqId} from '/util'
import ACTION_TYPES from './ACTION_TYPES'
import {reducer as todoReducer} from './todo'

const actions = {
  create (props={}) {
    return {
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
      },
    }
  },
  remove (id) {
    return {
      type: ACTION_TYPES.TODOS_REMOVE,
      payload: {id},
    }
  },
  update (id, state) {
    return {
      type: ACTION_TYPES.TODOS_UPDATE,
      payload: {id, state},
    }
  },
  toggle (id, isDone) {
    return {
      type: ACTION_TYPES.TODOS_TOGGLE,
      payload: {id, isDone},
    }
  },
}

const reducer = (state={}, action) => {
  switch (action.type) {
    case ACTION_TYPES.TODOS_CREATE:
      return {
        ...state,
        [action.payload.id]: todoReducer(undefined, action),
      }
    case ACTION_TYPES.TODOS_REMOVE:
      return omit(state, action.payload.id)
    case ACTION_TYPES.TODOS_UPDATE:
    case ACTION_TYPES.TODOS_TOGGLE:
      return {
        ...state,
        [action.payload.id]: todoReducer(state[action.payload.id], action)
      }
    default:
      return state
  }
}

export {
  actions,
  reducer,
}
