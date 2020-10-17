import {values, uniqId, sortBy} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

actions.create = ({title}) => (dispatch, getState) => {
  const id = uniqId()
  const lists = sortBy(
    values(getState().lists).concat({id, title}),
    'title'
  )
  const pos = lists.findIndex(list => list.id === id)
  const action = dispatch({
    type: ACTION_TYPES.LISTS__CREATE,
    payload: {id, title, pos},
  })
  return action
}

actions.discard = (id) => ({
  type: ACTION_TYPES.LISTS__DISCARD,
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

export default actions
