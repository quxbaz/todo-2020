import {getState} from '/util'
import {actions} from '/state/workspace'

const createApi = (dispatch) => {

  const api = {}

  api.create = ({title}) => {
    const action = actions.create({title})
    dispatch(action)
    return action.payload.id
  }

  api.setActiveList = (id) =>
    dispatch(actions.setActiveList(id))

  return api

}

export default createApi
