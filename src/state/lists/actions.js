import {uniqId} from 'qux'
import ACTION_TYPES from 'state/ACTION_TYPES'

const actions = {}

actions.create = (props) => ({
  type: ACTION_TYPES.LISTS__CREATE,
  payload: {
    id: uniqId(),
    ...props,
  },
})

actions.update = (id, props) => ({
  type: ACTION_TYPES.LISTS__UPDATE,
  payload: {id, ...props},
})

actions.discard = (id) => ({
  type: ACTION_TYPES.LISTS__DISCARD,
  payload: {id},
})

actions.destroy = (id) => ({
  type: ACTION_TYPES.LISTS__DESTROY,
  payload: {id},
})

actions.createNote = (id, props, pos) => ({
  type: ACTION_TYPES.LISTS__CREATE_NOTE,
  payload: {
    id,
    props: {
      id: uniqId(),
      ...props,
    },
    pos,
  },
})

actions.destroyNote = (id, note) => ({
  type: ACTION_TYPES.LISTS__DESTROY_NOTE,
  payload: {id, note},
})

actions.mergeNotes = (id, note1, note2) => (dispatch, getState) => {
  dispatch({
    type: ACTION_TYPES.LISTS__MERGE_NOTES,
    payload: {
      id, note1, note2,
      text: getState().notes[note2].text,
    },
  })
}

actions.clearNotes = (id) => (dispatch, getState) => {
  const state = getState()
  const list = state.lists[id]
  const notes = list.notes.map(id => state.notes[id])
    .filter(note => note.isDone)
    .map(note => note.id)
  dispatch({
    type: ACTION_TYPES.LISTS__CLEAR_NOTES,
    payload: {id, notes},
  })
}

actions.orderNoteUp = (id, note) => ({
  type: ACTION_TYPES.LISTS__ORDER_NOTE_UP,
  payload: {id, note},
})

actions.orderNoteDown = (id, note) => ({
  type: ACTION_TYPES.LISTS__ORDER_NOTE_DOWN,
  payload: {id, note},
})

actions.emptyTrash = () => ({
  type: ACTION_TYPES.LISTS__EMPTY_TRASH,
  payload: {},
})

export default actions
