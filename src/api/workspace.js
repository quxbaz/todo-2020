import {actions} from 'state/workspace'

const createApi = (dispatch, api) => ({

  create ({title}) {
    const action = actions.create({title})
    dispatch(action)
    return action.payload.id
  },

  setActiveList (id) {
    dispatch(actions.setActiveList(id))

    // ::TODO::
    // api.history.setUrl(`/lists/${id}`)
  },

  cycleNextList () {
    dispatch(actions.cycleNextList())
  },

  cyclePrevList () {
    dispatch(actions.cyclePrevList())
  },

})

export default createApi
