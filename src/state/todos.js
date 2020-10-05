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
}

const reducer = (state={}, action) => {
  switch (action.type) {
  case ACTION_TYPES.TODOS_CREATE:
    return {
      ...state,
      [action.payload.id]: todoReducer(undefined, action),
    }
  case ACTION_TYPES.TODOS_REMOVE:
    return omit(newState, action.payload.id)
  default:
    return state
  }
}

export {
  actions,
  reducer,
}
