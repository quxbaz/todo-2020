import ACTION_TYPES from '/state/ACTION_TYPES'

const note = (state, action) => {

  if (action.type === ACTION_TYPES.NOTES__CREATE) {
    const {id, text, createdBy, wasCreatedAtStartPos} = action.payload
    return {
      id,
      text,
      isDone: false,
      createdBy,
      wasCreatedAtStartPos,
    }
  }

  if (action.type === ACTION_TYPES.NOTES__UPDATE) {
    const {props} = action.payload
    return {
      ...state,
      ...action.payload.props,
    }
  }

  if (action.type === ACTION_TYPES.NOTES__TOGGLE) {
    const {isDone} = action.payload
    return {...state, isDone}
  }

  return state

}

export default note
