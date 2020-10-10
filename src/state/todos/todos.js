import {omit} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'
import {reducer as todo} from '/state/todo'

const todos = (state={}, action) => {

  // ::TODO::MIDDLEWARE::
  if (action.payload == null) {
    action = {...action, payload: {}}
  }
  if (action.meta == null) {
    action = {...action, meta: {}}
  }
  //

  const {id} = action.payload

  switch (action.type) {
    case ACTION_TYPES.TODOS_CREATE:
      return {
        ...state,
        [id]: todo(undefined, action),
      }
    case ACTION_TYPES.TODOS_REMOVE:
      return omit(state, id)
    case ACTION_TYPES.TODOS_UPDATE:
    case ACTION_TYPES.TODOS_TOGGLE:
      return {
        ...state,
        [id]: todo(state[id], action)
      }
    case ACTION_TYPES.TODOS_MERGE:
      return omit(state, id)
    default:
      return state
  }

}

export default todos
