import {without} from '/util'
import ACTION_TYPES from './ACTION_TYPES'

const reducer = (state=[], action) => {
  switch (action.type) {
    case ACTION_TYPES.TODOS_CREATE:
      if (action.payload.insertAfter != null) {
        const i = state.indexOf(action.payload.insertAfter)
        return [
          ...state.slice(0, i + 1),
          action.payload.id,
          ...state.slice(i + 1, state.length),
        ]
      } else if (action.payload.insertBefore != null) {
        const i = state.indexOf(action.payload.insertBefore)
        return [
          ...state.slice(0, i),
          action.payload.id,
          ...state.slice(i, state.length),
        ]
      } else {
        return [...state, action.payload.id]
      }
    case ACTION_TYPES.TODOS_REMOVE:
    case ACTION_TYPES.TODOS_MERGE:
      return without(state, action.payload.id)
    default:
      return state
  }
}

export {
  reducer,
}
