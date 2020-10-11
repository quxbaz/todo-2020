import {omit} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'
import todo from './todo'

const todos = (state={}, action) => {

  if (action.type === ACTION_TYPES.TODOS_CREATE) {
    const {id} = action.payload
    return {
      ...state,
      [id]: todo(undefined, action),
    }
  }

  if (action.type === ACTION_TYPES.TODOS_REMOVE) {
    const {id} = action.payload
    return omit(state, id)
  }

  if (action.type === ACTION_TYPES.TODOS_UPDATE ||
      action.type === ACTION_TYPES.TODOS_TOGGLE) {
    const {id} = action.payload
    return {
      ...state,
      [id]: todo(state[id], action)
    }
  }

  // // ::TODO::
  // if (action.type === ACTION_TYPES.TODOS_MERGE) {
  //   omit(state, id)
  // }

  return state

}

export default todos
