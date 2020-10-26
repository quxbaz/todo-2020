import {insert, without} from 'qux'
import ACTION_TYPES from 'state/ACTION_TYPES'

const init = {
  id: '',
  title: '',
  notes: [],
  isAlive: true,
}

const list = (state=init, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE) {
    let {id, title, isAlive} = action.payload
    if (isAlive == null)
      isAlive = true
    return {...state, id, title, isAlive}
  }

  if (action.type === ACTION_TYPES.LISTS__UPDATE) {
    const {id, ...props} = action.payload
    return {...state, ...props}
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

  if (action.type === ACTION_TYPES.LISTS__ORDER_NOTE_UP) {
    const {id, note} = action.payload
    const pos = state.notes.indexOf(note)
    if (pos === 0)
      return state
    return {
      ...state,
      notes: insert(without(state.notes, note), note, pos - 1),
    }
  }

  if (action.type === ACTION_TYPES.LISTS__ORDER_NOTE_DOWN) {
    const {id, note} = action.payload
    const pos = state.notes.indexOf(note)
    if (pos === state.notes.length - 1)
      return state
    return {
      ...state,
      notes: insert(without(state.notes, note), note, pos + 1),
    }
  }

  return state

}

export default list
