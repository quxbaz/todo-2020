import {getSortedLists} from '/state/lists/selectors'
// import {values, sortBy} from '/util'
import ACTION_TYPES from '/state/ACTION_TYPES'

const actions = {}

actions.setActiveList = (id) => ({
  type: ACTION_TYPES.WORKSPACE__SET_ACTIVE_LIST,
  payload: {id},
})

actions.cycleNextList = () => (dispatch, getState) => {
  const state = getState()
  if (state.workspace.activeList == null)
    return
  const lists = getSortedLists(state)
    .map(list => list.id)
  if (lists.length <= 1)
    return
  let index = lists.indexOf(state.workspace.activeList)
  if (index === lists.length - 1)
    index = -1
  dispatch({
    type: ACTION_TYPES.WORKSPACE__CYCLE_NEXT_LIST,
    payload: {
      listId: lists[index + 1],
    },
  })
}

actions.cyclePrevList = () => (dispatch, getState) => {
  const state = getState()
  if (state.workspace.activeList == null)
    return
  const lists = getSortedLists(state)
    .map(list => list.id)
  if (lists.length <= 1)
    return
  let index = lists.indexOf(state.workspace.activeList)
  if (index === 0)
    index = lists.length
  dispatch({
    type: ACTION_TYPES.WORKSPACE__CYCLE_PREV_LIST,
    payload: {
      listId: lists[index - 1],
    },
  })
}

export default actions
