import {actions} from 'state/lists'

const createApi = (dispatch, api) => ({

  create (props) {
    const action = dispatch(actions.create(props))
    return action.payload.id
  },

  update (id, props) {
    dispatch(actions.update(id, props))
  },

  discard (id) {
    dispatch(actions.discard(id))
  },

  destroy (id) {
    dispatch(actions.destroy(id))
  },

  createNote (id, props, pos) {
    dispatch(actions.createNote(id, props, pos))
  },

  destroyNote (id, note) {
    dispatch(actions.destroyNote(id, note))
  },

  mergeNotes (id, note1, note2) {
    dispatch(actions.mergeNotes(id, note1, note2))
  },

  clearNotes (id) {
    dispatch(actions.clearNotes(id))
  },

  orderNoteUp (id, note) {
    dispatch(actions.orderNoteUp(id, note))
  },

  orderNoteDown (id, note) {
    dispatch(actions.orderNoteDown(id, note))
  },

  emptyTrash () {
    dispatch(actions.emptyTrash())
  },

})

export default createApi
