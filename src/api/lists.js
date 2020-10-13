import {getState} from '/util'
import {actions as noteActions} from '/state/notes'
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

  api.merge = (id, note1, note2) => {
    const {text} = getState(dispatch).notes[note2]
    dispatch(actions.destroyNote(id, note2))
    dispatch(noteActions.appendText(note1, text))
  }

  return api

}

export default createApi
