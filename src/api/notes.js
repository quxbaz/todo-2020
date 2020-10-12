import {actions} from '/state/notes'

const createApi = (dispatch) => {

  const api = {}

  // ::TODO:: Rename to destroy.
  api.remove = (id) => dispatch(actions.remove(id))

  api.update = (id, state) => dispatch(actions.update(id, state))

  api.toggle = (id, isDone) => dispatch(actions.toggle(id, isDone))

  return api

}

export default createApi
