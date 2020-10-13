import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

actions.setActiveList = (id) => ({
  type: ACTION_TYPES.WORKSPACE__SET_ACTIVE_LIST,
  payload: {id},
})

actions.cycleNextList = () => ({
  type: ACTION_TYPES.WORKSPACE__CYCLE_NEXT_LIST,
  payload: {},
})

actions.cyclePrevList = () => ({
  type: ACTION_TYPES.WORKSPACE__CYCLE_PREV_LIST,
  payload: {},
})

export default actions
