import {actions as todosActions} from '../state/todos'

const createApi = (dispatch) => {
  const api = {
    create (text) {
      const action = todosActions.create(text)
      dispatch(action)
      return action.payload.id
    },
    remove (id) {
      const action = todosActions.remove(id)
      dispatch(action)
    },
    toggle (id, isDone) {
      const action = todosActions.toggle(id, isDone)
      dispatch(action)
    },
  }
  return api
}

export default createApi
