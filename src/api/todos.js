import {actions} from '/state/todos'

const createApi = (dispatch) => {

  const api = {}

  api.create = (props) => {
    const action = actions.create(props)
    dispatch(action)
    return action.payload.id
  }

  api.remove = (id) => dispatch(actions.remove(id))

  api.update = (id, state) => dispatch(actions.update(id, state))

  api.toggle = (id, isDone) => dispatch(actions.toggle(id, isDone))

  // ::TODO::
  // api.merge = (id) => {
  //   console.log('api.todos.merge :: TODO')
  //   const action = actions.merge(id)
  //   dispatch(action)
  // }

  return api

}

export default createApi
