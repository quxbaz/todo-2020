import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  lastCreated: null,
}

const notesMeta = (state=init, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE_NOTE) {
    const {props} = action.payload
    return {...state, lastCreated: props.id}
  }

  return state

}

export {
  notesMeta,
}
