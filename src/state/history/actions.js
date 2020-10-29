import ACTION_TYPES from 'state/ACTION_TYPES'

const actions = {}

actions.setUrl = (url) => ({
  type: ACTION_TYPES.URL__SET_URL,
  payload: {url},
})

export default actions
