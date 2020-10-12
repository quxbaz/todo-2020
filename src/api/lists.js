import {actions as notesActions} from '/state/notes'
import {actions as listsActions} from '/state/lists'

const createApi = (dispatch) => {

  const api = {}

  api.create = ({title}) => {
    const action = listsActions.create({title})
    dispatch(action)
    return action.payload.id
  }

  api.createNote = (id, pos, props={}) => {
    const action = dispatch(notesActions.create(props))
    const note = action.payload.id
    if (pos == null)
      dispatch(listsActions.appendNote(id, note))
    else
      dispatch(listsActions.insertNote(id, pos, note))
  }

  return api

}

export default createApi
