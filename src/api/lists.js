import {actions} from '/state/lists'

const createApi = (dispatch) => {

  const api = {}

  api.create = ({title}) => {
    const action = dispatch(actions.create({title}))
    return action.payload.id
  }

  api.createNote = (id, props, pos) =>
    dispatch(actions.createNote(id, props, pos))

  api.destroyNote = (id, note) =>
    dispatch(actions.destroyNote(id, note))

  api.mergeNotes = (id, note1, note2) =>
    dispatch(actions.mergeNotes(id, note1, note2))

  return api

}

export default createApi
