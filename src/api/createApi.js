import history from './history'
import workspace from './workspace'
import lists from './lists'
import notes from './notes'

const createApi = (dispatch) => ({
  history: history(dispatch),
  workspace: workspace(dispatch),
  lists: lists(dispatch),
  notes: notes(dispatch),
})

export default createApi
