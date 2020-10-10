import ACTION_TYPES from './ACTION_TYPES'

const init = {
  recent: null,
}

const reducer = (state=init, action) => {
  switch (action.type) {
    case ACTION_TYPES.TODOS_CREATE:
      state = {...state, recent: action.payload.id}
    default:
      return state
  }
}

export {
  reducer,
}
