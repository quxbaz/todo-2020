import {insert, without} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const order = (state=[], action) => {

  if (action.type === ACTION_TYPES.TODOS__CREATE) {
    const {id, insertAfter, insertBefore} = action.payload
    if (insertAfter == null && insertBefore == null) {
      return [...state, id]
    } else {
      let i = state.indexOf(insertAfter || insertBefore)
      if (insertAfter) i++
      return insert(state, i, id)
    }
  }

  if (action.type === ACTION_TYPES.TODOS__REMOVE) {
    const {id} = action.payload
    return without(state, id)
  }

  return state

}

export {
  order,
}
