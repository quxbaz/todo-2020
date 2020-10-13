import {insert, without} from '/util'
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

  return state

}

export default list
