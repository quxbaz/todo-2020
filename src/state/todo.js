import {actionTypes as todoActionTypes} from './todos'

const reducer = (state={}, action) => {
  switch (action.type) {
  case todoActionTypes.CREATE:
    return {
      id: action.payload.id,
      text: action.payload.text,
      timestamp: action.payload.timestamp,
    }
  default:
    return state
  }
}

export {
  reducer,
}
