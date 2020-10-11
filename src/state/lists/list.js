import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  id: '',
  title: '',
  notes: [],
}

const list = (state=init, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE) {
    const {id, title} = action.payload
    return {...state, id, title}
  }

  if (action.type === ACTION_TYPES.LISTS__APPEND_NOTE) {
    const {note} = action.payload
    return {
      ...state,
      notes: [...state.notes, note],
    }
  }

  if (action.type === ACTION_TYPES.LISTS__INSERT_NOTE) {
    const {id, insertAfter, insertBefore, note} = action.payload
    if (insertAfter == null && insertBefore == null) {
      return {
        ...state,
        notes: state.notes.concat(note),
      }
    } else {
      let pos = state.indexOf(insertAfter || insertBefore)
      if (insertAfter) pos++
      return {
        ...state,
        notes: insert(state.notes, pos, note),
      }
    }
  }

  if (action.type === ACTION_TYPES.NOTES__REMOVE) {
    const {id} = action.payload
    return {
      ...state,
      notes: without(state.notes, id),
    }
  }

  return state

}

export default list
