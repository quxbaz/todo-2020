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

  if (action.type === ACTION_TYPES.LISTS__ADD_NOTE) {
    const {note} = action.payload
    return {
      ...state,
      notes: [...state.notes, note],
    }
  }

  return state

}

export default list
