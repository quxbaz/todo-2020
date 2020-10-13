import {actions} from '/state/notes'

const createApi = (dispatch) => {

  const api = {}

  api.update = (id, state) => dispatch(actions.update(id, state))

  api.toggle = (id, isDone) => dispatch(actions.toggle(id, isDone))

  return api

}

export default createApi
