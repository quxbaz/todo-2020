import {actions} from '/state/lists'

const createApi = (dispatch) => {

  const api = {}

  api.create = ({title}) => {
    const action = actions.create({title})
    dispatch(action)
    return action.payload.id
  }

  return api

}

export default createApi
