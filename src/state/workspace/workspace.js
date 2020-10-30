import ACTION_TYPES from 'state/ACTION_TYPES'

const init = {}

const workspace = (state=init, action) => {

  if (action.type === ACTION_TYPES.WORKSPACE__CYCLE_TO_NEXT_LIST ||
      action.type === ACTION_TYPES.WORKSPACE__CYCLE_TO_PREV_LIST) {
    // ::TODO::
    return state
  }

  if (action.type === ACTION_TYPES.LISTS__DISCARD) {
    // ::TODO::
    return state
  }

  return state

}

export default workspace
