import {actions} from 'state/history'

const createApi = (dispatch, api) => ({

  setUrl (url) {
    dispatch(actions.setUrl(url))
    if (window.location.pathname !== url)
      window.history.pushState(null, '', url)
  },

})

export default createApi
