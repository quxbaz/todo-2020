import {actions as todosActions} from '../state/todos'

const createApi = (dispatch) => {

  const createTodo = (text) => {
    dispatch(todosActions.create(text))
  }

  return {
    createTodo,
  }

}

export default createApi
