import ACTION_TYPES from './ACTION_TYPES'

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.TODOS_CREATE:
      return {
        id: action.payload.id,
        text: action.payload.text,
        isDone: false,
        timestamp: action.payload.timestamp,
      }
    case ACTION_TYPES.TODOS_UPDATE:
      return {
        ...state,
        ...action.payload.state,
      }
    case ACTION_TYPES.TODOS_TOGGLE:
      return {
        ...state,
        isDone: action.payload.isDone,
      }
    default:
      return state
  }
}

export {
  reducer,
}
