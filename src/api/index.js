import lists from './lists'
import todos from './todos'

const createApi = (dispatch) => ({
  lists: lists(dispatch),
  todos: todos(dispatch),
})

export {createApi}
