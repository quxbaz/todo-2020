import ACTION_TYPES from '/state/ACTION_TYPES'

const todo = (state, action) => {

  if (action.type === ACTION_TYPES.TODOS__CREATE) {
    const {id, text, createdBy, wasCreatedAtStartPos} = action.payload
    return {
      id,
      text,
      isDone: false,
      createdBy,
      wasCreatedAtStartPos,
    }
  }

  if (action.type === ACTION_TYPES.TODOS__UPDATE) {
    const {props} = action.payload
    return {
      ...state,
      ...action.payload.props,
    }
  }

  if (action.type === ACTION_TYPES.TODOS__TOGGLE) {
    const {isDone} = action.payload
    return {...state, isDone}
  }

  return state

}

export default todo
