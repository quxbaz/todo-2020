import {omit} from '../../util'
import {reducer as todoReducer} from '../todo'
import ACTION_TYPES from '../ACTION_TYPES'
import {Reducer} from '../types'

const reducer: Reducer = (state={}, action) => {
  switch (action.type) {
  case ACTION_TYPES.TODOS_CREATE:
    return {
      ...state,
      [action.payload.id]: todoReducer(undefined, action),
    }
  case ACTION_TYPES.TODOS_REMOVE:
    return omit(state, action.payload.id)
  default:
    return state
  }
}

export default reducer
