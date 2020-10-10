import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

actions.setActiveList = (id) => ({
  type: ACTION_TYPES.WORKSPACE__SET_ACTIVE_LIST,
  payload: {id},
})

export default actions
