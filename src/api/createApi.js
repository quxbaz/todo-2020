import workspace from './workspace'
import lists from './lists'
import todos from './todos'

const createApi = (dispatch) => ({
  workspace: workspace(dispatch),
  lists: lists(dispatch),
  todos: todos(dispatch),
})

export default createApi
