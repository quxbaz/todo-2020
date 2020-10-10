import {actions as todosActions} from '/state/todos'

const createApi = (dispatch) => {
  const api = {
    create (props) {
      const action = todosActions.create(props)
      dispatch(action)
      return action.payload.id
    },
    remove (id) {
      const action = todosActions.remove(id)
      dispatch(action)
    },
    update (id, state) {
      const action = todosActions.update(id, state)
      dispatch(action)
    },
    toggle (id, isDone) {
      const action = todosActions.toggle(id, isDone)
      dispatch(action)
    },
    merge (id) {
      console.log('api.todos.merge :: TODO')
      const action = todosActions.merge(id)
      dispatch(action)
    },
  }
  return api
}

export default createApi
