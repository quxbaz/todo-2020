import util from '../util'
import {reducer as todoReducer} from './todo'

let id = 0

const actionTypes = {
  CREATE: 'todo-2020/todos/CREATE',
  REMOVE: 'todo-2020/todos/REMOVE',
}

const actions = {
  create (text) {
    return {
      type: actionTypes.CREATE,
      payload: {
        id: id++,
        text,
        timestamp: Date.now(),
      },
    }
  },
  remove (id) {
    return {
      type: actionTypes.REMOVE,
      payload: {id},
    }
  },
}

const reducer = (state={}, action) => {
  switch (action.type) {
  case actionTypes.CREATE:
    return {
      ...state,
      [action.payload.id]: todoReducer(undefined, action),
    }
  case actionTypes.REMOVE:
    return util.omit(newState, action.payload.id)
  default:
    return state
  }
}

export {
  actionTypes,
  actions,
  reducer,
}
