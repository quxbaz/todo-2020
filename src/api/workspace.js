import {actions} from 'state/workspace'

const createApi = (dispatch, api) => ({

  create ({title}) {
    const action = actions.create({title})
    dispatch(action)
    return action.payload.id
  },

  cycleToNextList () {
    // dispatch(actions.cycleToNextList())
  },

  cycleToPrevList () {
    // dispatch(actions.cycleToPrevList())
  },

})

export default createApi
