import {omit} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'
import note from './note'

const notes = (state={}, action) => {

  if (action.type === ACTION_TYPES.NOTES__CREATE) {
    const {id} = action.payload
    return {
      ...state,
      [id]: note(undefined, action),
    }
  }

  if (action.type === ACTION_TYPES.NOTES__REMOVE) {
    const {id} = action.payload
    return omit(state, id)
  }

  if (action.type === ACTION_TYPES.NOTES__UPDATE ||
      action.type === ACTION_TYPES.NOTES__TOGGLE) {
    const {id} = action.payload
    return {
      ...state,
      [id]: note(state[id], action)
    }
  }

  // // ::TODO::
  // if (action.type === ACTION_TYPES.NOTES__MERGE) {
  //   omit(state, id)
  // }

  return state

}

export default notes
