import {actions} from 'state/workspace'

const createApi = (dispatch, api) => ({

  create ({title}) {
    const action = actions.create({title})
    dispatch(action)
    return action.payload.id
  },

  setActiveList (id) {
    dispatch(actions.setActiveList(id))
    api.history.setUrl(`/lists/${id}`)
  },

  cycleToNextList () {
    // dispatch(actions.cycleToNextList())
  },

  cycleToPrevList () {
    // dispatch(actions.cycleToPrevList())
  },

})

export default createApi
