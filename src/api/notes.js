import {actions} from 'state/notes'

const createApi = (dispatch) => {

  const api = {}

  api.update = (id, state) =>
    dispatch(actions.update(id, state))

  return api

}

export default createApi
