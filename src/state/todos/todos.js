import {omit} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'
import todo from './todo'

const todos = (state={}, action) => {

  if (action.type === ACTION_TYPES.TODOS__CREATE) {
    const {id} = action.payload
    return {
      ...state,
      [id]: todo(undefined, action),
    }
  }

  if (action.type === ACTION_TYPES.TODOS__REMOVE) {
    const {id} = action.payload
    return omit(state, id)
  }

  if (action.type === ACTION_TYPES.TODOS__UPDATE ||
      action.type === ACTION_TYPES.TODOS__TOGGLE) {
    const {id} = action.payload
    return {
      ...state,
      [id]: todo(state[id], action)
    }
  }

  // // ::TODO::
  // if (action.type === ACTION_TYPES.TODOS__MERGE) {
  //   omit(state, id)
  // }

  return state

}

export default todos
