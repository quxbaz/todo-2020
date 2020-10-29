import history from './history'
import workspace from './workspace'
import lists from './lists'
import notes from './notes'

const createApi = (dispatch) => {
  const api = {}
  Object.assign(api, {
    history: history(dispatch, api),
    workspace: workspace(dispatch, api),
    lists: lists(dispatch, api),
    notes: notes(dispatch, api),
  })
  return api
}

export default createApi
