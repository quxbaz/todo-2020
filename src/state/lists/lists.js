import {omit} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'
import list from './list'

const lists = (state={}, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE) {
    const {id} = action.payload
    return {
      ...state,
      [id]: list(undefined, action),
    }
  }

  if (action.type === ACTION_TYPES.LISTS__DESTROY) {
    const {id} = action.payload
    return omit(state, id)
  }

  if (action.type === ACTION_TYPES.LISTS__UPDATE ||
      action.type === ACTION_TYPES.LISTS__DISCARD ||
      action.type === ACTION_TYPES.LISTS__CREATE_NOTE ||
      action.type === ACTION_TYPES.LISTS__DESTROY_NOTE ||
      action.type === ACTION_TYPES.LISTS__MERGE_NOTES ||
      action.type === ACTION_TYPES.LISTS__CLEAR_NOTES ||
      action.type === ACTION_TYPES.LISTS__ORDER_NOTE_UP ||
      action.type === ACTION_TYPES.LISTS__ORDER_NOTE_DOWN) {
    const {id} = action.payload
    return {
      ...state,
      [id]: list(state[id], action),
    }
  }

  return state

}

export default lists
