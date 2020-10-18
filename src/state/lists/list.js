import {insert, without} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  id: '',
  title: '',
  notes: [],
  isAlive: true,
}

const list = (state=init, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE) {
    const {id, title} = action.payload
    return {...state, id, title}
  }

  if (action.type === ACTION_TYPES.LISTS__DISCARD) {
    const {id} = action.payload
    return {...state, isAlive: false}
  }

  if (action.type === ACTION_TYPES.LISTS__CREATE_NOTE) {
    const {props, pos} = action.payload
    return {
      ...state,
      notes: pos == null
        ? [...state.notes, props.id]
        : insert(state.notes, props.id, pos)
    }
  }

  if (action.type === ACTION_TYPES.LISTS__DESTROY_NOTE) {
    const {note} = action.payload
    return {
      ...state,
      notes: without(state.notes, note),
    }
  }

  if (action.type === ACTION_TYPES.LISTS__MERGE_NOTES) {
    const {note1, note2} = action.payload
    return {
      ...state,
      notes: without(state.notes, note2),
    }
  }

  if (action.type === ACTION_TYPES.LISTS__CLEAR_NOTES) {
    const {id, notes} = action.payload
    return {
      ...state,
      notes: without(state.notes, ...notes),
    }
  }

  return state

}

export default list
