import {actions as notesActions} from '/state/notes'
import {actions as listsActions} from '/state/lists'

const createApi = (dispatch) => {

  const api = {}

  api.create = ({title}) => {
    const action = listsActions.create({title})
    dispatch(action)
    return action.payload.id
  }

  api.createNote = (id, props) => {
    const action = dispatch(notesActions.create(props))
    dispatch(
      listsActions.appendNote(id, action.payload.id)
    )
  }

  return api

}

export default createApi
