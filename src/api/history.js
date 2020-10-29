import {actions} from 'state/history'

const createApi = (dispatch) => {
  const api = {}

  api.setUrl = (url) => {
    dispatch(actions.setUrl(url))
    if (window.location.pathname !== url)
      window.history.pushState(url)
  }

  return api
}

export default createApi
