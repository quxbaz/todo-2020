import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  id: '',
  text: '',
  isDone: false,
}

const note = (state, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE_NOTE) {
    const {props} = action.payload
    return {
      ...init,
      id: props.id,
      text: props.text || '',
    }
  }

  if (action.type === ACTION_TYPES.NOTES__UPDATE) {
    const {props} = action.payload
    return {...state, ...props}
  }

  return state

}

export default note
