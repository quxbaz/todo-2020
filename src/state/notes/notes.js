import {omit} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'
import note from './note'

const notes = (state={}, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE_NOTE) {
    const {props} = action.payload
    return {
      ...state,
      [props.id]: note(undefined, action),
    }
  }

  if (action.type === ACTION_TYPES.LISTS__DESTROY_NOTE) {
    const {note} = action.payload
    return omit(state, note)
  }

  if (action.type === ACTION_TYPES.NOTES__UPDATE) {
    const {id} = action.payload
    return {
      ...state,
      [id]: note(state[id], action),
    }
  }

  if (action.type === ACTION_TYPES.NOTES__APPEND_TEXT) {
    const {id} = action.payload
    return {
      ...state,
      [id]: note(state[id], action),
    }
  }

  return state

}

export default notes
