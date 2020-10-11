import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  recent: null,
}

const meta = (state=init, action) => {

  if (action.type === ACTION_TYPES.TODOS_CREATE) {
    const {id} = action.payload
    return {...state, recent: id}
  }

  return state

}

export {
  meta,
}
