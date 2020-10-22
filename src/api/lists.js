import {actions} from '/state/lists'

const createApi = (dispatch) => {

  const api = {}

  api.create = (props) => {
    const action = dispatch(actions.create(props))
    return action.payload.id
  }

  api.update = (id, props) =>
    dispatch(actions.update(id, props))

  api.discard = (id) =>
    dispatch(actions.discard(id))

  api.destroy = (id) =>
    dispatch(actions.destroy(id))

  api.createNote = (id, props, pos) =>
    dispatch(actions.createNote(id, props, pos))

  api.destroyNote = (id, note) =>
    dispatch(actions.destroyNote(id, note))

  api.mergeNotes = (id, note1, note2) =>
    dispatch(actions.mergeNotes(id, note1, note2))

  api.clearNotes = (id) =>
    dispatch(actions.clearNotes(id))

  api.orderNoteUp = (id, note) =>
    dispatch(actions.orderNoteUp(id, note))

  api.orderNoteDown = (id, note) =>
    dispatch(actions.orderNoteDown(id, note))

  api.emptyTrash = () =>
    dispatch(actions.emptyTrash())

  return api

}

export default createApi
