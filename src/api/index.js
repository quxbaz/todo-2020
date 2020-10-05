import todos from './todos'

const createApi = (dispatch) => ({
  todos: todos(dispatch),
})

export {createApi}
