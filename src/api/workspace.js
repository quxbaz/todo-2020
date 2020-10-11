import {getState} from '/util'
import {actions as workspaceActions} from '/state/workspace'
import {actions as listsActions} from '/state/lists'
import {actions as todosActions} from '/state/todos'

const createApi = (dispatch) => {

  const api = {}

  api.create = ({title}) => {
    const action = workspaceActions.create({title})
    dispatch(action)
    return action.payload.id
  }

  api.setActiveList = (id) =>
    dispatch(workspaceActions.setActiveList(id))

  api.createTodo = (props) => {
    const action = dispatch(todosActions.create(props))
    dispatch(
      listsActions.addTodo(
        getState(dispatch).workspace.activeList,
        action.payload.id
      )
    )
  }

  return api

}

export default createApi
