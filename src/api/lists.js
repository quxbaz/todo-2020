import {actions as actions} from '/state/lists'

const createApi = (dispatch) => {

  const api = {}

  api.create = ({title}) => {
    const action = actions.create({title})
    dispatch(action)
    return action.payload.id
  }

  api.createNote = (id, props, pos) => {
    dispatch(actions.createNote(id, props, pos))
  }

  api.destroyNote = (id, note) => {
    dispatch(actions.destroyNote(id, note))
  }

  return api

}

export default createApi
