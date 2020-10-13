import {insert} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const init = {
  lists: [],
  activeList: null,
}

const workspace = (state=init, action) => {

  if (action.type === ACTION_TYPES.LISTS__CREATE) {
    const {id, pos} = action.payload
    return {
      ...state,
      lists: insert(state.lists, id, pos),
    }
  }

  if (action.type === ACTION_TYPES.WORKSPACE__SET_ACTIVE_LIST) {
    const {id} = action.payload
    return {
      ...state,
      activeList: id,
    }
  }

  if (action.type === ACTION_TYPES.WORKSPACE__CYCLE_NEXT_LIST) {
    const {activeList, lists} = state
    const i = (lists.indexOf(activeList) + 1) % lists.length
    return {
      ...state,
      activeList: state.lists[i],
    }
  }

  if (action.type === ACTION_TYPES.WORKSPACE__CYCLE_PREV_LIST) {
    const {activeList, lists} = state
    const index = lists.indexOf(activeList)
    const i = index === 0 ? lists.length - 1 : index - 1
    return {
      ...state,
      activeList: state.lists[i],
    }
  }

  return state

}

export default workspace
