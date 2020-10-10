import ACTION_TYPES from '/state/ACTION_TYPES'
import list from './list'

const lists = (state={}, action) => {

  // ::TODO::MIDDLEWARE::
  if (action.payload == null) {
    action = {...action, payload: {}}
  }
  if (action.meta == null) {
    action = {...action, meta: {}}
  }
  //

  switch (action.type) {
    case ACTION_TYPES.LISTS__CREATE:
      return {
        ...state,
        [id]: list(undefined, action),
      }
    default:
      return state
  }

}

export default list
