import {actions} from 'state/history'

const createApi = (dispatch, api) => {

  const setUrl = (url) => {
    dispatch(actions.setUrl(url))
    if (window.location.pathname !== url)
      window.history.pushState(null, '', url)
  }

  const home = () => setUrl('/')

  return {
    setUrl,
    home,
  }
}

export default createApi
