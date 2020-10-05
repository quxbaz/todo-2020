import ACTION_TYPES from './ACTION_TYPES'

const reducer = (state, action) => {
  switch (action.type) {
  case ACTION_TYPES.TODOS_CREATE:
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
