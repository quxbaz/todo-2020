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

  return state

}

export default workspace
