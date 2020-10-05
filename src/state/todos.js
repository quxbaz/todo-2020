import {omit, uniqId} from '../util'
import ACTION_TYPES from './ACTION_TYPES'
import {reducer as todoReducer} from './todo'

const actions = {
  create (text) {
    return {
      type: ACTION_TYPES.TODOS_CREATE,
      payload: {
        id: uniqId(),
        text,
        timestamp: Date.now(),
      },
    }
  },
  remove (id) {
    return {
      type: ACTION_TYPES.TODOS_REMOVE,
      payload: {id},
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
      return omit(newState, id)
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
