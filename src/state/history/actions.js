import ACTION_TYPES from 'state/ACTION_TYPES'

const actions = {}

actions.setUrl = (url) => ({
  type: ACTION_TYPES.HISTORY__SET_URL,
  payload: {url},
})

export default actions
