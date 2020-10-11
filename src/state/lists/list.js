import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  id: '',
  title: '',
  todos: [],
}

const list = (state=init, action) => {

  const payload = action.payload || {}

  if (action.type === ACTION_TYPES.LISTS__CREATE)
    return {
      ...state,
      id: payload.id,
      title: payload.title,
    }

  if (action.type === ACTION_TYPES.LISTS__ADD_TODO)
    return {
      ...state,
      todos: [...state.todos, payload.todo],
    }

  return state

}

export default list
