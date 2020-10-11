import workspace from './workspace'
import lists from './lists'
import notes from './notes'

const createApi = (dispatch) => ({
  workspace: workspace(dispatch),
  lists: lists(dispatch),
  notes: notes(dispatch),
})

export default createApi
