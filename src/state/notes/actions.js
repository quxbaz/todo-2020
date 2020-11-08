import ACTION_TYPES from 'state/ACTION_TYPES'

const actions = {}

actions.update = (id, props) => ({
  type: ACTION_TYPES.NOTES__UPDATE,
  payload: {id, props},
})

export default actions
