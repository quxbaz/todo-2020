import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  id: '',
  title: '',
  todos: [],
}

const list = (state=init, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE) {
    const {id, title} = action.payload
    return {...state, id, title}
  }

  if (action.type === ACTION_TYPES.LISTS__ADD_TODO) {
    const {todo} = action.payload
    return {
      ...state,
      todos: [...state.todos, todo],
    }
  }

  return state

}

export default list
