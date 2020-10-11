import {actions as todosActions} from '/state/todos'
import {actions as listsActions} from '/state/lists'

const createApi = (dispatch) => {

  const api = {}

  api.create = ({title}) => {
    const action = listsActions.create({title})
    dispatch(action)
    return action.payload.id
  }

  return api

}

export default createApi
