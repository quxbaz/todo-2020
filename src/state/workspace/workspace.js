import ACTION_TYPES from 'state/ACTION_TYPES'

const init = {
  activeList: null,
}

const workspace = (state=init, action) => {

  if (action.type === ACTION_TYPES.WORKSPACE__SET_ACTIVE_LIST) {
    const {id} = action.payload
    return {
      ...state,
      activeList: id,
    }
  }

  if (action.type === ACTION_TYPES.WORKSPACE__CYCLE_TO_NEXT_LIST ||
      action.type === ACTION_TYPES.WORKSPACE__CYCLE_TO_PREV_LIST) {
    const {listId} = action.payload
    return {...state, activeList: listId}
  }

  if (action.type === ACTION_TYPES.LISTS__DISCARD) {
    const {id} = action.payload
    if (state.activeList !== id) return state
    else return {...state, activeList: null}
  }

  return state

}

export default workspace
