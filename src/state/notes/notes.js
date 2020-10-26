import {omit} from 'qux'
import ACTION_TYPES from 'state/ACTION_TYPES'
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

  if (action.type === ACTION_TYPES.LISTS__MERGE_NOTES) {
    const {note1, note2} = action.payload
    return omit({
      ...state,
      [note1]: note(state[note1], action),
    }, note2)
  }

  if (action.type === ACTION_TYPES.LISTS__CLEAR_NOTES) {
    const {notes} = action.payload
    return omit(state, ...notes)
  }

  return state

}

export default notes
