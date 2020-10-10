import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  id: '',
  title: '',
  todos: [],
}

const list = (state=init, action) => {

  // ::TODO::MIDDLEWARE::
  if (action.payload == null) {
    action = {...action, payload: {}}
  }
  if (action.meta == null) {
    action = {...action, meta: {}}
  }
  //

  const {id, title, todos} = action.payload

  switch (action.type) {
    case ACTION_TYPES.LISTS__CREATE:
      return {...state, id, title}
    default:
      return state
  }

}

export default list
