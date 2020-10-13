import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  id: '',
  text: '',
  isDone: false,
}

const note = (state, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE_NOTE) {
    const {props, createdBy, wasCreatedAtStartPos} = action.payload
    return {
      ...init,
      id: props.id,
      text: props.text,

      // ::TODO:: Remove this.
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
